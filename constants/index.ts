export const personas = [
    {   
        id: "interview-1",
        name: "Mia Carter",
        role: "REVENUE OPERATIONS DIRECTOR",
        description: "Strategic and analytical, excelling in optimizing sales processes and cross-functional collaboration.",
        image: "/avatars/avatar1.jpg",
    },
    {
        id: "interview-2",
        name: "Isabelle Tran",
        role: "SALES ENABLEMENT MANAGER",
        description: "Encouraging and engaging, great for refining coaching skills and delivering impactful training sessions.",
        image: "/avatars/avatar2.jpg",
    },
    {
        id: "interview-3",
        name: "Liam Bennett",
        role: "DEAL DESK MANAGER",
        description: "Sharp and detail-oriented, ideal for mastering pricing strategies and contract negotiations.",
        image: "/avatars/avatar4.jpg",
    },
    // {
    //     id: "interview-4",
    //     name: "Ethan Patel",
    //     role: "GTM SYSTEMS MANAGER",
    //     description: "Tech-savvy and solutions-driven, perfect for fine-tuning automation workflows and CRM best practices.",
    //     image: "/avatars/avatar5.jpg",
    // },
    // {
    //     id: "interview-5",
    //     name: "Noah Chambers",
    //     role: "REVENUE ANALYTICS MANAGER",
    //     description: "Data-focused and insightful, great for interpreting revenue trends and making data-driven recommendations.",
    //     image: "/avatars/avatar6.jpg",
    // },
    // {
    //     id: "interview-6",
    //     name: "Dhruv Patel",
    //     role: "SENIOR TECHNICAL LEAD",
    //     description: "Focused on technical excellence and innovation, great for refining technical interview skills and problem-solving.",
    //     image: "/avatars/avatar1.jpg",
    // },
];

export const recentInterviews = [
    {
        id: "recent-interview-1",
        interviewId: "interview-1",
        persona: "Mia Carter",
        role: "Revenue Operations Director",
        companyTitle: "Lead Optimization Engineer at Google",
        duration: "15:24 min",
        date: "Mar 15, 2025",
        preview: "Pellentesque ut rhoncus nibh. Sed interdum ultricorper libero, semper lacus susd...",
        score: 4.5,
        image: "/avatars/avatar1.jpg",
    },
    {
        id: "recent-interview-2",
        interviewId: "interview-2",
        persona: "Isabelle Tran",
        role: "Revenue Analytics Manager",
        companyTitle: "Senior Marketing Agent at Airbnb",
        duration: "15:24 min",
        date: "Mar 15, 2025",
        preview: "Nunc sed diam sit amet orci cursus vulputate. Nulla pretium ut sapien in cursus.",
        disabled: true,
        image: "/avatars/avatar2.jpg",
    },
    {
        id: "recent-interview-3",
        interviewId: "interview-3",
        persona: "Isabelle Tran",
        role: "Sales Enablement Manager",
        companyTitle: "Lead Optimization Engineer at Warpchase",
        duration: "15:24 min",
        date: "Mar 15, 2025",
        preview: "Mauris accumsan arcu at lacinia interdum. Sed id gravida sem. Vestibulum gravida...",
        score: 4.5,
        image: "/avatars/avatar2.jpg",
    },
    {
        id: "recent-interview-4",
        interviewId: "interview-4",
        persona: "Mia Carter",
        role: "Revenue Operations Director",
        companyTitle: "Lead Optimization Engineer at Donquadtech",
        duration: "15:24 min",
        date: "Mar 15, 2025",
        preview: "Pellentesque consequat euismod nisl in tincidunt. Donec commodo eros et erat pra...",
        score: 4.5,
        image: "/avatars/avatar1.jpg",
    },
    {
        id: "recent-interview-5",
        interviewId: "interview-5",
        persona: "Mia Carter",
        role: "Revenue Operations Director",
        companyTitle: "Senior Marketing Agent at Condax",
        duration: "15:24 min",
        date: "Mar 15, 2025",
        preview: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac tu...",
        score: 4.5,
        image: "/avatars/avatar1.jpg",
    },
];

export const mockInterviewResults = [
    {
        id: "result-1",
        interviewId: "interview-1",
        interviewInfo: {
            totalScore: 4.5,
            role: "VP of RevOps",
            sessionLength: "15:24 min",
            date: "Mar 15, 2025",
            positionTitle: "Product Designer at Google",
            persona: {
                name: "Mia Carter",
                role: "Revenue Operations Director",
                image: "/avatars/avatar1.jpg"
            }
        },
        scoreCategories: [
            {
                id: 1,
                title: "Clarity of Communication",
                score: 4.5,
                description: {
                    short: "How effectively you communicated complex ideas with precision and clarity.",
                    full: "This category assesses your ability to articulate thoughts clearly, use concise language, maintain a logical flow in your responses, and adjust your communication style to ensure understanding. Clear communicators can explain complex concepts in accessible ways and confirm their message has been properly received."
                },
                feedback: {
                    short: "You demonstrated excellent clarity in most answers, particularly when discussing revenue strategies and team collaboration.",
                    full: "Your responses were generally well-structured and easy to follow. You excelled at breaking down complex revenue concepts into understandable components and used relevant examples to illustrate your points. To improve further, watch for occasional technical jargon that might be unclear to non-specialists, and consider preparing more concise explanations for common RevOps concepts you might need to explain to cross-functional teammates."
                }
            },
            {
                id: 2,
                title: "Depth of Answer",
                score: 4.5,
                description: {
                    short: "The thoroughness and substance of your responses to interview questions.",
                    full: "This category evaluates how comprehensively you address questions, demonstrating depth of knowledge, providing relevant examples, and showcasing critical thinking. Strong responses go beyond surface-level answers to explore nuances, consider multiple perspectives, and connect concepts to broader business contexts while remaining focused on the question asked."
                },
                feedback: {
                    short: "Your answers showed strong domain knowledge with good supporting examples from your experience.",
                    full: "You consistently provided substantial, well-developed responses that demonstrated your expertise in revenue operations. Your examples from previous roles were particularly effective in showcasing your practical experience. To enhance your performance, consider preparing more quantifiable results and specific metrics that demonstrate the impact of your work. In a few instances, you could have expanded more on how your approaches directly affected business outcomes."
                }
            },
            {
                id: 3,
                title: "Confidence & Tone",
                score: 4.0,
                description: {
                    short: "The assurance and appropriate tone you conveyed throughout the interview.",
                    full: "This category assesses your verbal and non-verbal confidence, including voice modulation, speaking pace, and how you handle challenging questions. Professional tone reflects appropriate enthusiasm, engagement with the interviewer, and the ability to remain composed under pressure while avoiding overconfidence or appearing arrogant."
                },
                feedback: {
                    short: "You maintained good confidence overall, but occasionally hesitated when addressing challenging scenarios.",
                    full: "You projected confidence throughout most of the interview, speaking with appropriate authority on topics within your expertise. Your tone was professional and engaged, establishing good rapport. Areas for improvement include maintaining consistent confidence when discussing challenges or potential weaknesses. There were a few moments where hesitation or qualifying language (\"I think,\" \"probably,\" \"maybe\") diminished the impact of otherwise strong answers. Practice addressing difficult questions with the same assurance you bring to your areas of strength."
                }
            }
        ],
        summaryFeedback: "You demonstrated great clarity and role alignment. Your responses showed strong domain knowledge in revenue operations, particularly in process optimization and cross-functional collaboration. To improve, work on expanding your answers under pressure and quantifying your achievements with specific metrics and business outcomes."
    },

    {
        id: "result-2",
        interviewId: "interview-2",
        interviewInfo: {
            totalScore: 3.8,
            role: "GTM Systems Manager",
            sessionLength: "18:42 min",
            date: "Mar 12, 2025",
            positionTitle: "Senior GTM Specialist at Microsoft",
            persona: {
                name: "Ethan Patel",
                role: "GTM SYSTEMS MANAGER",
                image: "/avatars/avatar5.jpg"
            }
        },
        scoreCategories: [
            {
                id: 1,
                title: "Technical Knowledge",
                score: 4.0,
                description: {
                    short: "Your understanding of CRM systems, automation, and GTM technical processes.",
                    full: "This category evaluates your technical knowledge of go-to-market systems, including CRM platforms, marketing automation, sales enablement tools, and integration capabilities. Strong technical knowledge includes understanding system architecture, data flows, and how different tools work together to support the business objectives."
                },
                feedback: {
                    short: "You demonstrated strong CRM knowledge but could improve on integration capabilities across platforms.",
                    full: "Your understanding of Salesforce and HubSpot functionality was impressive, with clear explanations of how to structure data for effective sales workflows. Areas for improvement include expanding your knowledge of API integrations between platforms and developing stronger perspectives on data governance across the GTM tech stack. Consider focusing more on how different systems connect rather than discussing them in isolation."
                }
            },
            {
                id: 2,
                title: "Problem-Solving Approach",
                score: 4.5,
                description: {
                    short: "Your methodology for approaching technical challenges and system design problems.",
                    full: "This category assesses your approach to problem-solving, including how you analyze requirements, identify potential solutions, evaluate options, and implement chosen approaches. Strong problem-solvers demonstrate systematic thinking, consider business context, and balance technical considerations with user needs."
                },
                feedback: {
                    short: "Your structured approach to solving complex problems was methodical and effective.",
                    full: "You excelled at breaking down complex problems into manageable components and used a logical framework to evaluate different solution approaches. Your consideration of both technical feasibility and end-user experience was particularly strong. To improve further, consider incorporating more quantifiable success metrics into your solution design and being more explicit about how you would measure the effectiveness of your implementations."
                }
            },
            {
                id: 3,
                title: "Cross-Functional Communication",
                score: 3.0,
                description: {
                    short: "Your ability to communicate technical concepts to non-technical stakeholders.",
                    full: "This category evaluates how effectively you can translate technical concepts for non-technical audiences, adapt your communication style for different stakeholders, and build collaborative relationships across departments. Effective cross-functional communicators bridge the gap between technical requirements and business needs."
                },
                feedback: {
                    short: "You used too much technical jargon when explaining concepts to non-technical stakeholders.",
                    full: "While your technical knowledge is strong, you frequently relied on specialized terminology without adequate explanation. Your responses to questions about communicating with marketing and sales teams revealed a tendency to dive too deeply into technical details rather than focusing on business impact. To improve, practice translating complex technical concepts into business benefits and focus on 'why' something matters before explaining 'how' it works. Consider developing a set of analogies and simplified explanations for common technical concepts."
                }
            }
        ],
        summaryFeedback: "Your technical skills and problem-solving approach are strong assets, particularly your systematic thinking and knowledge of GTM systems. To advance in a cross-functional GTM role, focus on developing your ability to communicate technical concepts more effectively to non-technical colleagues and consider how to frame system improvements in terms of business outcomes rather than technical specifications."
    },

    {
        id: "result-3",
        interviewId: "interview-3",
        interviewInfo: {
            totalScore: 4.2,
            role: "Sales Enablement Manager",
            sessionLength: "21:16 min",
            date: "Mar 10, 2025",
            positionTitle: "Sales Enablement Lead at Adobe",
            persona: {
                name: "Isabelle Tran",
                role: "SALES ENABLEMENT MANAGER",
                image: "/avatars/avatar2.jpg"
            }
        },
        scoreCategories: [
            {
                id: 1,
                title: "Training Program Design",
                score: 4.5,
                description: {
                    short: "Your approach to designing effective sales training programs and materials.",
                    full: "This category evaluates your methodology for developing training programs that address skill gaps, reinforce key behaviors, and drive adoption of sales methodologies. Strong training design includes needs assessment, content development, delivery methods, and measurement of effectiveness."
                },
                feedback: {
                    short: "Your training design approach was comprehensive and focused on measurable outcomes.",
                    full: "You demonstrated excellent understanding of instructional design principles as applied to sales environments. Your emphasis on microlearning, reinforcement strategies, and knowledge checks showed sophisticated thinking about retention and application. One area for improvement would be incorporating more diverse learning modalities to accommodate different learning styles within sales teams. Also, consider how you might more systematically validate training effectiveness beyond self-reported metrics."
                }
            },
            {
                id: 2,
                title: "Sales Process Knowledge",
                score: 4.0,
                description: {
                    short: "Your understanding of sales methodologies, buyer journeys, and process optimization.",
                    full: "This category assesses your knowledge of sales methodologies, pipeline management, sales stages, and how enablement supports the sales process. Strong candidates demonstrate understanding of both theoretical frameworks and practical application of sales concepts, including how to adapt processes for different sales motions."
                },
                feedback: {
                    short: "You showed strong knowledge of multiple sales methodologies but could improve on connecting them to specific scenarios.",
                    full: "Your understanding of consultative selling, MEDDIC, and value-based approaches was impressive. You clearly articulated the key components of each methodology and their general applications. To improve, work on more clearly articulating when and why to apply specific methodologies in different selling situations. Your discussion of enterprise sales was strong, but you could develop more specific enablement approaches for different sales motions such as SMB, channel, and expansion selling."
                }
            },
            {
                id: 3,
                title: "Content Strategy",
                score: 4.0,
                description: {
                    short: "Your approach to developing, organizing, and delivering sales enablement content.",
                    full: "This category evaluates your strategy for creating, managing, and distributing sales content throughout the sales process. Strong content strategy includes content governance, accessibility, measurement of effectiveness, and alignment with the buyer journey."
                },
                feedback: {
                    short: "Your content strategy was well-organized but could focus more on measuring content effectiveness.",
                    full: "You presented a thoughtful approach to content organization and delivery, with clear consideration for the sales process stages and how content should align with buyer needs. Your content governance and update processes were particularly well developed. To enhance your approach, develop more robust methodologies for measuring content effectiveness beyond usage metrics. Consider how you might implement A/B testing of content and more directly connect content usage to sales outcomes."
                }
            }
        ],
        summaryFeedback: "Your sales enablement expertise is strong, particularly in training design and sales methodology knowledge. You presented clear frameworks for supporting sales teams and demonstrated good understanding of how enablement drives performance. To further elevate your approach, focus on developing more sophisticated content effectiveness measurements and tailoring your enablement strategies more specifically to different sales motions and team compositions."
    }
];