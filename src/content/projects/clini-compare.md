---
title: "Clini-Compare: Patient Similarity from Radiology Notes"
summary: "A visualization tool that helps physicians reason about complex cases by surfacing semantically similar patients from unstructured radiology notes, supporting clinical sensemaking, trust, and decision-making."
thumbnail: /thumbnails/thumb-clinicompare.png
thumbnailHover: /thumbnails/thumb-clinicompare-hover.png
tags: [Clinical Decision Support, Sensemaking, Visual Analytics]
link: /papers/clini-compare.pdf
linkLabel: Read paper
order: 4
---

<script>
	import Carousel from '#lib/components/Carousel.svelte';
</script>

| | |
|---|---|
| **My role** | Led the concept, system design, and full-stack development (embedding pipeline, Flask + FAISS backend, Svelte + D3 frontend); designed and ran the embedding benchmark. Adam Perer advised. |
| **Methods** | Interactive visualization design · sentence embeddings and vector search · dimensionality reduction (UMAP) · text-alignment visualization · embedding model benchmarking with an LLM judge |
| **Venue** | Mathur & Perer, *"Clini-Compare: An Interactive Patient-Similarity Visualization Tool for Clinical Decision Support,"* CHI '25 Workshop on Envisioning the Future of Interactive Health, Yokohama, Japan. |

![Clini-Compare dashboard showing patients similar to a note describing a thoracentesis for pleural effusion](/images/clini-compare/teaser.png)

*Clini-Compare visualizing patients similar to a new patient whose radiology note describes a thoracentesis for pleural effusion: a similarity histogram (top), a UMAP of the full note corpus with matches highlighted (left), and a ranked list of the most similar patients (right).*

**TL;DR.** Physicians reason from cases ("I have seen a patient like this"), and machine learning has produced many patient-similarity algorithms, but almost none have been put in front of clinicians as interactive tools. I designed and built Clini-Compare, which takes the clinical note a physician has already written, finds the most semantically similar past patients in MIMIC-IV, and shows *why* they matched. To choose an embedding, I benchmarked four models against an LLM judge. The general-purpose model won, a result that says as much about the judge as about the models.

[View code on GitHub](https://github.com/MrMathur/clini-compare)

---

## 1. The Problem

**Case-based reasoning (CBR)** is the practice of making decisions about a new patient by referring to similar past cases. Interactive CBR systems mirror how clinicians already think, and controlled studies have linked CBR to better outcomes in complex cases.

Patient similarity has been used for clinical trial matching, medical education, and public health communication, but not as decision support for complex disease. The existing work has three gaps:

| Approach | What it offers | Limitation |
|---|---|---|
| ML/NLP similarity models | Accurate matching on structured data, notes, or both | Algorithm-focused; evaluated on benchmarks, not with clinicians |
| Interactive cohort tools (e.g., CareFlow) | Outcome comparison across care plans for similar patients | Built on structured data, which is often unavailable in practice |
| Clinical notes | Rich semantic description of the patient, written at every visit | Rarely used as the basis for an interactive similarity system |

**The gap.** We don't know how similarity systems fit clinical workflows, how physicians interpret a similarity-based match, or how they calibrate trust in it compared with other clinical AI.

---

## 2. Design Rationale

**Use the note the clinician already wrote.** Structured data is convenient for modeling but often isn't ready at the point of care. A clinical note is. Clini-Compare sits in the post-documentation workflow: once a note exists, it becomes the query.

**Show the population, not just the top result.** A ranked list alone hides whether a match is meaningful. If every patient is similar, the top match says little. The dashboard pairs the ranked list with views of the whole similarity distribution and the whole corpus.

**Make the basis of similarity inspectable.** An embedding score is opaque. The compare view highlights shared terms so the physician can judge whether the match reflects clinically meaningful characteristics or surface overlap.

---

## 3. System

![System pipeline: preprocessing embeddings for MIMIC-IV radiology notes, then retrieving similar patients for a new note](/images/clini-compare/pipeline.png)

*(a) Offline: embed the MIMIC-IV radiology note corpus. (b) Online: embed the input note, compute similarity, find the most similar patients, and show their discharge notes.*

**Pipeline.**
- **Preprocessing.** De-identified radiology notes from MIMIC-IV are embedded with three models: all-MiniLM-L6-v2 (general-purpose), ClinicalBERT (trained on MIMIC-III notes), and BioSentVec (trained on PubMed and MIMIC-III notes).
- **Matching.** A new note is cleaned and embedded, and a FAISS index ranks every patient in the corpus by similarity to it.
- **Retrieval.** Selecting a match loads that patient's discharge summary for comparison.

**Interface.** Three views take the clinician from input to comparison:

| View | What it shows | Supports |
|---|---|---|
| **Input** | A text box for the new patient's radiology note | Entering the case in the clinician's own words |
| **Dashboard** | Similarity histogram, UMAP of the corpus, ranked patient cards, summary statistics | Judging how distinctive the case is and where it sits in the population |
| **Compare** | Input note and matched note side by side with shared terms highlighted, plus the match's discharge summary | Checking whether the match is clinically meaningful and what happened to that patient |

<Carousel label="Clini-Compare interface" images={[
	{ src: '/images/clini-compare/ui_input.png', alt: 'Input view: a text box holding a thoracentesis radiology note, with a Find Similar Patients button', caption: 'Input: the clinician pastes the new patient\'s radiology note and searches for similar patients.' },
	{ src: '/images/clini-compare/ui_dashboard.png', alt: 'Dashboard view: similarity histogram across the top, UMAP of the note corpus on the left, ranked list of most similar patients on the right', caption: 'Dashboard: the similarity histogram shows how distinctive the case is, the UMAP shows where matches sit in the corpus, and the ranked list shows the closest patients.' },
	{ src: '/images/clini-compare/ui_compare.png', alt: 'Compare view: input note and matched note side by side with shared terms highlighted, and the matched patient\'s discharge note on the right', caption: 'Compare: the input note and a matched note side by side, with shared terms highlighted, next to the match\'s discharge summary.' }
]} />

**Visualization techniques.**
- **Similarity histogram.** The distribution of similarity between the input note and every note in the corpus. It answers a question a ranked list can't: is this patient broadly typical, or are there only a few close matches? The highest-similarity bin defines the set of top matches.
- **UMAP projection.** All radiology note embeddings projected into 2D, with matches highlighted. It lets clinicians spot clusters of similar patients, identify outliers, and see how well the corpus covers different kinds of notes.
- **Text alignment.** Shared terms highlighted across the two notes, so the clinician can audit the basis of a match instead of taking the score on faith.

Stack: Svelte, D3, Flask, FAISS, sentence-transformers, UMAP.

---

## 4. Benchmarking the Embedding Model

**The ideal test isn't feasible.** The gold standard would be to show a clinician an input note alongside the full corpus of 100,000+ notes, ask them to pick the most similar one, and measure how often each model agrees. No clinician can read that many notes, so I used a proxy.

![Embedding benchmark: 1,000 MIMIC-IV test notes, 4 embedding models, and Gemini 1.5 as judge; all-MiniLM-L6-v2 agreed with the judge on 458 notes, TF-IDF 346, ClinicalBERT 181, BioSentVec 92](/images/clini-compare/benchmark.png)

**Procedure.**
1. **Test set.** I sampled 1,000 notes from the MIMIC-IV radiology dataset.
2. **Candidates.** For each test note, four embedding models each retrieved the single most similar note in the corpus:
   - **General-purpose:** TF-IDF, all-MiniLM-L6-v2
   - **Clinical:** ClinicalBERT, BioSentVec
3. **Judge.** Gemini 1.5 was given the test note and the four candidates and asked to pick the one most similar to the test note.
4. **Score.** I counted how often each model's candidate was the one the LLM picked.

**Results.**

| Model | Type | LLM agreement (of 1,000) |
|---|---|---|
| all-MiniLM-L6-v2 | General-purpose | **458** |
| TF-IDF | General-purpose | 346 |
| ClinicalBERT | Clinical | 181 |
| BioSentVec | Clinical | 92 |

*Counts sum to more than 1,000 because models sometimes retrieved the same note, so one LLM pick could match several models.*

all-MiniLM-L6-v2 agreed with the judge most often, and it is the model the deployed system uses. Both clinical models trailed both general-purpose models, the opposite of what domain pretraining would predict.

**What this result can and can't support.** The judge is itself a general-purpose model, so it may favor the kind of surface-level semantic overlap that general-purpose embeddings capture. Agreement with an LLM measures consistency with the LLM, not clinical relevance. The benchmark justified a default model; it doesn't show that the matches are the ones a clinician would choose.