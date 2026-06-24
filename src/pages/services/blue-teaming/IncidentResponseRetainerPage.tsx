import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { LifeBuoy, ShieldQuestion, BrainCircuit, CheckSquare, Code } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const IncidentResponseRetainerPage: React.FC = () => {
    const pageTitle = "Incident Response Retainer";
    const pageDescription = "Ensure rapid, expert response during a security crisis with a dedicated IR retainer. Gain peace of mind knowing our elite team is on standby to defend you.";

    const sections = [
        {
            title: "What is an IR Retainer?",
            icon: LifeBuoy,
            content: <p>An Incident Response (IR) Retainer is a service agreement that gives you priority access to our team of cybersecurity experts in the event of a security breach. It's like having a world-class fire department on speed dial, but for cyberattacks.</p>
        },
        {
            title: "The Retainer Model",
            icon: BrainCircuit,
            content: <p>You pay a recurring fee to reserve a block of our team's time. This ensures we are familiar with your environment and can respond immediately when an incident occurs, bypassing the delays of legal and procurement processes that happen during a crisis.</p>
        },
        {
            title: "Key Benefits",
            icon: CheckSquare,
            content: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Guaranteed SLAs:</strong> Pre-agreed response times (e.g., 1-hour response).</li>
                    <li><strong>Reduced Costs:</strong> Retainer hours are billed at a lower rate than emergency IR services.</li>
                    <li><strong>Proactive Services:</strong> Unused retainer hours can often be used for proactive work like threat hunting or training.</li>
                    <li><strong>Peace of Mind:</strong> Know exactly who to call and that experts are ready to help 24/7.</li>
                </ul>
            )
        },
        {
            title: "When to Activate",
            icon: ShieldQuestion,
            content: <p>A retainer can be activated for any suspected security incident, including ransomware attacks, business email compromise (BEC), data breaches, insider threats, and denial-of-service attacks.</p>
        },
        {
            title: "Our Expertise",
            icon: Code,
            content: <p>Our IR team consists of seasoned experts with backgrounds in digital forensics, malware reverse engineering, and threat intelligence. We have successfully managed breaches across all industries and sizes of organization.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Incident Response Retainer"
            heroSubtitle="Your Expert Cyber First Responders on Standby"
            sections={sections}
            faqData={FAQ_DATA['blue-teaming']}
            ctaText="Secure Your Retainer"
            serviceName="Incident Response Retainer"
        />
    );
};

export default IncidentResponseRetainerPage;
