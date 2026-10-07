export interface Role {
	role: string;
	year: string;
	description: string;
}

export interface Job {
	company: string;
	roles: Role[];
}

export const experience: Job[] = [
	{
		company: 'Carnegie Mellon University',
		roles: [
			{
				role: 'Doctoral Research Assistant',
				year: 'Aug 24 - Present',
				description:
					'Conducting research at the intersection of Human-Computer Interaction, Machine Learning, Healthcare, and Human-AI Collaboration, focusing on developing innovative solutions in healthcare using advanced data visualization techniques.'
			}
		]
	},
	{
		company: 'The MathWorks, Inc.',
		roles: [
			{
				role: 'UX Designer',
				year: 'Jun 21 - Jun 24',
				description:
					'Supporting multiple MATLAB and Simulink products, including MATLAB fixed-point workflows, Simulink Studio, and System Composer. Responsibilities include collaborative design events, wireframing, iterative prototyping and high-fidelity visual design.'
			}
		]
	},
	{
		company: 'Georgia Institute of Technology',
		roles: [
			{
				role: 'Graduate Research Assistant',
				year: 'Jan 20 - Jul 20',
				description:
					'Worked with the School of Electrical Engineering, to create course Material for EC 3040 Semiconductor Devices. Created interactive web based visualizations as course materials using D3.js and P5.js.'
			},
			{
				role: 'Graduate Teaching Assistant',
				year: 'Aug 20 - May 21',
				description:
					'Served as a Teaching Assistant for CS 4460 Introduction to Information Visualization over Fall 2020 and Spring 2020. Major responsibilities included lecturing, grading, and assisting undergradute students with d3.js and Tableau.'
			}
		]
	},
	{
		company: 'SAS Research and Development',
		roles: [
			{
				role: 'UX Design Intern',
				year: 'May 18 - Jul 18',
				description:
					'Redesigned the SAS Analytics Credit Scoring Tool. Conducted Contextual Interviews with Risk Analysts in Indian banks, and used those insights to create high-fidelity sketch mockups.'
			}
		]
	}
];
