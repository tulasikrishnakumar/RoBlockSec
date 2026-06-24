import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { Smartphone, BarChart, BrainCircuit, CheckSquare, Code } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const EDRManagementPage: React.FC = () => {
    const pageTitle = "Endpoint Detection & Response (EDR/XDR) Management";
    const pageDescription = "Leverage the full power of your EDR/XDR solution with our expert management, tuning, and monitoring services for advanced endpoint threat detection and response.";

    const sections = [
        {
            title: "EDR/XDR Solutions",
            icon: Smartphone,
            content: <p>Endpoint Detection and Response (EDR) provides deep visibility into endpoint activity (laptops, servers) to detect advanced threats. Extended Detection and Response (XDR) expands this visibility across network, cloud, and email for a more unified view of an attack chain.</p>
        },
        {
            title: "Our Management Service",
            icon: BrainCircuit,
            content: <p>We take on the day-to-day management of your EDR/XDR platform. This includes deploying and tuning policies, investigating complex alerts, developing custom detection rules, and performing response actions like host isolation and malware removal.</p>
        },
        {
            title: "Dashboards & Automation",
            icon: BarChart,
            content: <p>We create custom dashboards to give you clear visibility into your endpoint security posture. We also leverage the automation capabilities of your platform to orchestrate response actions, freeing up your team and ensuring consistent, rapid containment.</p>
        },
        {
            title: "Supported Platforms",
            icon: Code,
            content: <p>Our team holds expert-level certifications and has extensive experience with all major EDR/XDR platforms, including CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint, and Palo Alto Cortex XDR.</p>
        },
        {
            title: "Benefits",
            icon: CheckSquare,
            content: <p>Maximize your ROI on expensive security tools, reduce alert fatigue with expert tuning, gain access to elite threat hunters and responders, and ensure your most critical assets—your endpoints—are robustly protected.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="EDR/XDR Management"
            heroSubtitle="Unleashing the Full Potential of Your Endpoint Security"
            sections={sections}
            faqData={FAQ_DATA['blue-teaming']}
            ctaText="Optimize Your EDR/XDR"
            serviceName="EDR/XDR Management"
        />
    );
};

export default EDRManagementPage;
