import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { Building, BrainCircuit, CheckSquare, FileText, Users } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const GovernancePage: React.FC = () => {
    const pageTitle = "Cybersecurity Governance";
    const pageDescription = "Establish a strong foundation for your security program with a robust governance framework that defines roles, policies, and strategic direction.";

    const sections = [
        {
            title: "Framework Design",
            icon: Building,
            content: <p>We help you design and implement a cybersecurity governance framework (e.g., based on NIST CSF or ISO 27001) that aligns with your business objectives and provides a structured approach to managing security.</p>
        },
        {
            title: "Roles & Responsibilities",
            icon: Users,
            content: <p>Clear roles are crucial. We assist in defining a RACI (Responsible, Accountable, Consulted, Informed) matrix for security, ensuring everyone from the board to IT staff understands their part in protecting the organization.</p>
        },
        {
            title: "Security Policy Suite",
            icon: FileText,
            content: <p>We work with you to develop a comprehensive suite of security policies, standards, and procedures. This includes everything from an overarching Information Security Policy to specific standards for access control, data classification, and incident response.</p>
        },
        {
            title: "Security Steering Committee",
            icon: BrainCircuit,
            content: <p>We can help establish and facilitate a Security Steering Committee, bringing together business leaders to provide strategic oversight, approve budgets, and ensure the security program has the support it needs to succeed.</p>
        },
        {
            title: "Benefits",
            icon: CheckSquare,
            content: <p>Achieve clear accountability for security, make risk-informed decisions, demonstrate due diligence to regulators and partners, and create a sustainable, mature security program that scales with your business.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Cybersecurity Governance"
            heroSubtitle="Building the Strategic Foundation for Your Security Program"
            sections={sections}
            faqData={FAQ_DATA['grc-services']}
            ctaText="Strengthen Your Governance"
            serviceName="Cybersecurity Governance"
        />
    );
};

export default GovernancePage;
