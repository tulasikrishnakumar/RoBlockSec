import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { Eye, BrainCircuit, CheckSquare, FileText, Code } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const SecurityMonitoringPage: React.FC = () => {
  const pageTitle = "24/7 Security Monitoring & Incident Response";
  const pageDescription = "Our SOC provides real-time monitoring and rapid response to security incidents, ensuring threats are contained and neutralized before they cause significant damage.";

  const sections = [
    {
      title: "Real-Time Monitoring",
      icon: Eye,
      content: <p>Our Security Operations Center (SOC) operates 24/7/365, ingesting logs and alerts from your SIEM, EDR, firewalls, and cloud environments. Our analysts use advanced correlation rules to detect suspicious activity in real-time.</p>
    },
    {
      title: "Incident Response Workflow",
      icon: BrainCircuit,
      content: (
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Detection:</strong> An alert is triggered and triaged by an analyst.</li>
          <li><strong>Analysis:</strong> The analyst investigates the scope and impact of the threat.</li>
          <li><strong>Containment:</strong> Immediate actions are taken to isolate affected systems.</li>
          <li><strong>Eradication:</strong> The root cause of the threat is removed from the environment.</li>
          <li><strong>Recovery:</strong> Systems are restored to normal operation.</li>
          <li><strong>Lessons Learned:</strong> A post-incident review improves future defenses.</li>
        </ol>
      )
    },
    {
      title: "Case Study Example",
      icon: FileText,
      content: <p>We detected and blocked a ransomware attack for a healthcare client within minutes of initial access. Our rapid response isolated the compromised endpoint, preventing lateral movement and data encryption, saving the client millions in potential damages and downtime.</p>
    },
    {
      title: "Tools and Technologies",
      icon: Code,
      content: <p>We are experts in managing and optimizing industry-leading SIEM and SOAR platforms like Splunk, Microsoft Sentinel, and Palo Alto XSOAR to automate and accelerate our response capabilities.</p>
    },
    {
      title: "Benefits",
      icon: CheckSquare,
      content: <p>Dramatically reduce your mean time to detect (MTTD) and mean time to respond (MTTR). Minimize the impact of security incidents, ensure business continuity, and gain peace of mind with expert defenders watching over your network.</p>
    },
  ];

  return (
    <ServiceSubPageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      heroTitle="24/7 Security Monitoring & IR"
      heroSubtitle="Your Ever-Vigilant Guard Against Cyber Threats"
      sections={sections.slice(0, 5)} // To fit the layout
      faqData={FAQ_DATA['blue-teaming']}
      ctaText="Enhance Your Monitoring"
      serviceName="24/7 Security Monitoring & Incident Response"
    />
  );
};

export default SecurityMonitoringPage;
