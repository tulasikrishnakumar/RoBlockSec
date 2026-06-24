import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { Search, ShieldQuestion, BrainCircuit, CheckSquare, Code } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const ThreatIntelligencePage: React.FC = () => {
    const pageTitle = "Threat Intelligence & Threat Hunting";
    const pageDescription = "Proactively hunt for hidden adversaries in your network and leverage cutting-edge threat intelligence to stay ahead of emerging attack campaigns.";

    const sections = [
        {
            title: "Proactive Threat Hunting",
            icon: Search,
            content: <p>Unlike traditional security which reacts to alerts, threat hunting is a proactive process. Our hunters form hypotheses based on threat intelligence (e.g., "Is a new APT group targeting our industry active in our network?") and search for evidence of compromise that automated tools may have missed.</p>
        },
        {
            title: "Threat Intelligence Feeds",
            icon: BrainCircuit,
            content: <p>We subscribe to and analyze dozens of commercial, open-source, and government threat intelligence feeds. This data on new malware, attacker TTPs (Tactics, Techniques, and Procedures), and indicators of compromise (IOCs) is used to enrich our detections and guide our hunting expeditions.</p>
        },
        {
            title: "How It Helps",
            icon: ShieldQuestion,
            content: <p>Proactive threat hunting uncovers attackers who have bypassed traditional defenses and are dwelling in your network. By finding them early, we can prevent them from achieving their objectives, such as data exfiltration or ransomware deployment, drastically reducing risk.</p>
        },
        {
            title: "Our Methodology",
            icon: Code,
            content: <p>We use frameworks like the MITRE ATT&CK® to structure our hunts, ensuring comprehensive coverage of known adversary behaviors. Our analysts are skilled in using advanced query languages on EDR and SIEM data to find the needle in the haystack.</p>
        },
        {
            title: "Benefits",
            icon: CheckSquare,
            content: <p>Reduce attacker dwell time, improve your detection capabilities based on real-world findings, gain a deeper understanding of your security gaps, and move from a reactive to a proactive defense posture.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Threat Intelligence & Hunting"
            heroSubtitle="Actively Seeking Out Adversaries in Your Network"
            sections={sections}
            faqData={FAQ_DATA['blue-teaming']}
            ctaText="Start Proactive Hunting"
            serviceName="Threat Intelligence & Threat Hunting"
        />
    );
};

export default ThreatIntelligencePage;
