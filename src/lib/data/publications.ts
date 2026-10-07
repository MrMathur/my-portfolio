export interface Publication {
	title: string;
	conference: string;
	authors: string[];
	tags: string[];
	link: string;
}

export const publications: Publication[] = [
	{
		title:
			'A Human-Centered Approach to Identifying Promises, Risks, & Challenges of Text-to-Image Generative AI in Radiology',
		conference: 'AIES 2025',
		authors: [
			'Katelyn Morrison',
			'Arpit Mathur',
			'Aidan Bradshaw',
			'Tom Wartmann',
			'Steven Lundi',
			'Afrooz Zandifar',
			'Weichang Dai',
			'Kayhan Batmanghelich',
			'Motahhare Eslami',
			'Adam Perer'
		],
		tags: ['Generative AI', 'Radiology', 'Healthcare Technology', 'Education'],
		link: 'https://arxiv.org/pdf/2507.16207'
	},
	{
		title:
			'Exploratory Visual Analysis of Transcripts for Interaction Analysis in Human-Computer Interaction',
		conference: 'CHI 2025',
		authors: ['Ben Rydal Shapiro', 'Rogers Hall', 'Arpit Mathur', 'Edwin Zhao'],
		tags: ['HCI', 'Visualization', 'Qualitative Methods', 'Transcripts'],
		link: 'https://dl.acm.org/doi/10.1145/3706598.3713490'
	},
	{
		title:
			'Clini-Compare: An Interactive Patient-Similarity Visualization Tool for Clinical Decision Support',
		conference: 'CHI 2025 (WORKSHOP)',
		authors: ['Arpit Mathur', 'Adam Perer'],
		tags: ['Patient Similarity', 'Visualization', 'Decision Support', 'Healthcare Technology'],
		link: 'https://zenodo.org/records/15203352'
	},
	{
		title: 'Texture: Structured Exploration of Text Datasets',
		conference: 'Arxiv',
		authors: ['Will Epperson', 'Arpit Mathur', 'Adam Perer', 'Dominik Moritz'],
		tags: ['Text Visualization', 'Exploratory Data Analysis', 'Interactive Systems', 'Dataset Tools'],
		link: 'https://arxiv.org/pdf/2504.16898'
	},
	{
		title:
			'Toward Interpretable 3D Diffusion in Radiology: Token-Wise Attribution for Text-to-CT Synthesis',
		conference: 'MIDL 2025',
		authors: [
			'Aidan Bradshaw',
			'Katelyn Morrison',
			'Arpit Mathur',
			'Weicheng Dai',
			'Motahhare Eslami',
			'Kayhan Batmanghelich',
			'Adam Perer'
		],
		tags: ['3D Diffusion', 'Explainable AI', 'Radiology', 'Text-to-Image'],
		link: 'https://openreview.net/pdf?id=DTYFRzRPQn'
	},
	{
		title: 'Turn charts for interaction analysis: Visually mapping the conversation floor',
		conference: 'ICLS 2024',
		authors: ['Benjamin R. Shapiro', 'Rogers Hall', 'Arpit Mathur', 'Edwin Zhao'],
		tags: [
			'Learning Sciences',
			'Interaction Analysis',
			'Human–computer interaction',
			'Information Visualization'
		],
		link: 'https://repository.isls.org//handle/1/8993'
	},
	{
		title: 'Interactive Transcription Techniques for Interaction Analysis',
		conference: 'ICLS 2022',
		authors: ['Arpit Mathur', 'Benjamin R. Shapiro'],
		tags: [
			'Learning Sciences',
			'Interaction Analysis',
			'Human–computer interaction',
			'Information Visualization'
		],
		link: 'https://repository.isls.org//handle/1/8993'
	},
	{
		title:
			'A Study of Motivation, Preferences, and Pain Points Regarding Participation in Career Related Mentorship',
		conference: 'HCII 2021',
		authors: ['Arpit Mathur', 'Carrie Bruce'],
		tags: [
			'Human-computer interaction',
			'Career development',
			'Human resources',
			'Mentor-Mentee relationships',
			'User research'
		],
		link: 'https://link.springer.com/chapter/10.1007/978-3-030-78635-9_60'
	},
	{
		title: 'Development and Evaluation of Usability Heuristics for Voice User Interfaces',
		conference: 'ICoRD 2021',
		authors: ['Lokesh Fulfagar', 'Anupriya Gupta', 'Arpit Mathur', 'Abhishek Shrivastava'],
		tags: [
			'Voice user interfaces',
			'Usability heuristics',
			'Heuristic evaluation',
			'Speech interaction',
			'Conversational interfaces',
			'Human–computer interaction'
		],
		link: 'https://link.springer.com/chapter/10.1007/978-981-16-0041-8_32'
	},
	{
		title: 'A Study of Outbound Automated Call Preferences for DOTS Adherence in Rural India.',
		conference: 'INTERACT 2019',
		authors: ['Arpit Mathur', 'Shimmila Bhowmick', 'Keyur Sorathia'],
		tags: ['Automated calls', 'IVR', 'ICTD', 'HCI4D', 'Health education'],
		link: 'https://link.springer.com/chapter/10.1007/978-3-030-29387-1_2'
	}
];
