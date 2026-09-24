// All site content lives here — edit this file to update the portfolio.

import onboardingShot from "../public/labs/user-onboarding-script.png";
import loginShot from "../public/labs/ubuntu-login-users.png";
import sshShot from "../public/labs/ssh-ed25519-key.png";

export const profile = {
  name: "Bishes Adhikari",
  firstName: "Bishes",
  role: "IT Support Specialist",
  location: "Launceston, TAS",
  email: "specialbishes9@gmail.com",
  phone: "0451 280 806",
  phoneHref: "tel:+61451280806",
  linkedin: "https://www.linkedin.com/in/bishes-adhikari",
  linkedinLabel: "linkedin.com/in/bishes-adhikari",
  github: "https://github.com/Bishes7",
  // Drop your resume PDF into /public with this name to enable the download button.
  resume: "/Bishes-Adhikari-Resume.pdf",
  summary:
    "Junior IT Support professional with hands-on experience in Microsoft 365, Active Directory and Windows troubleshooting, plus growing Linux (Ubuntu) skills through ongoing homelab projects. I enjoy turning a frustrated “it’s not working” into a quick fix and a happy user.",
};

export const stats = [
  { value: "2", label: "Microsoft certifications" },
  { value: "3", label: "Hands-on lab environments" },
  { value: "B.IT", label: "Bachelor of Information Technology" },
  { value: "Now", label: "Available for immediate start" },
];

export const skills = [
  {
    title: "Microsoft 365 & Azure",
    icon: "cloud",
    items: [
      "M365 Admin Center",
      "Azure AD (Entra ID) users & groups",
      "Azure VMs & Storage",
      "RBAC",
      "MFA support",
      "Exchange mailboxes",
    ],
  },
  {
    title: "Windows & Hardware",
    icon: "monitor",
    items: [
      "Windows 10/11 troubleshooting",
      "Hardware setup & repairs",
      "Imaging",
      "Remote Desktop support",
      "Printer issues",
    ],
  },
  {
    title: "Identity & Networking",
    icon: "shield",
    items: [
      "Active Directory",
      "Group Policy",
      "DNS",
      "DHCP",
      "VPN",
      "Wi-Fi fundamentals",
    ],
  },
  {
    title: "Linux",
    icon: "terminal",
    items: [
      "Ubuntu commands & navigation",
      "Bash scripting & automation",
      "SSH key authentication",
      "File permissions",
      "User management",
      "Package management (apt)",
      "VirtualBox homelab",
    ],
  },
  {
    title: "Tools & Process",
    icon: "ticket",
    items: [
      "Jira",
      "Zendesk",
      "Freshdesk",
      "Ticket triage",
      "Incident documentation",
    ],
  },
  {
    title: "People Skills",
    icon: "users",
    items: [
      "Clear, jargon-free communication",
      "Face-to-face & remote support",
      "Patience under pressure",
      "Customer service",
    ],
  },
];

export const marquee = [
  "Microsoft 365",
  "Azure",
  "Entra ID",
  "Active Directory",
  "Group Policy",
  "Exchange",
  "Windows 11",
  "Ubuntu",
  "DNS / DHCP",
  "VPN",
  "MFA",
  "Jira",
  "Zendesk",
  "Freshdesk",
  "VirtualBox",
  "Bash",
  "SSH",
  "RBAC",
];

export const experience = [
  {
    role: "IT Support Intern / Trainee",
    org: "Tech Skills Institute",
    period: "May – Sep 2024",
    points: [
      "Provided Level 1 IT support in a training and simulated enterprise environment, face-to-face and remote",
      "Assisted users with password resets, MFA issues, email problems and account access",
      "Troubleshot Windows login issues, printer problems and basic network connectivity",
      "Created and managed users and groups in Active Directory; logged and tracked issues via ticketing systems",
      "Set up desktops, laptops and office IT equipment; supported M365 user management, licensing and mailbox setup",
    ],
  },
];

export const featuredLab = {
  title: "Linux Homelab & User Onboarding Automation",
  tag: "Featured lab · Ubuntu",
  description:
    "Built an Ubuntu virtual machine in VirtualBox to practise real sysadmin work. When I needed to create several new accounts, I wrote a Bash script to do it for me instead of adding them one at a time.",
  points: [
    "Wrote user_onboard.sh, which reads a new_hires.txt list and creates each account with a home directory and Bash shell",
    "Ran it with sudo and checked every account in /etc/passwd; all five users now appear on the Ubuntu login screen",
    "Generated an ED25519 SSH key pair for secure, password-free remote access",
    "Keeps the system patched with apt and practises file permissions and user management",
  ],
  tech: ["Ubuntu", "VirtualBox", "Bash scripting", "sudo", "apt", "SSH keys"],
  images: [
    {
      src: onboardingShot,
      alt: "Terminal running user_onboard.sh, creating users kiran, bijay, ramjan, lab and kush, then verifying them in /etc/passwd",
      caption: "Bulk onboarding script: 5 users created and verified",
    },
    {
      src: loginShot,
      alt: "Ubuntu login screen listing the newly created user accounts",
      caption: "The new accounts ready at the Ubuntu login screen",
    },
    {
      src: sshShot,
      alt: "ED25519 SSH key randomart generated in PowerShell",
      caption: "ED25519 SSH key pair for secure remote access",
    },
  ],
};

export const projects = [
  {
    title: "Azure Cloud Lab",
    tag: "Cloud",
    description:
      "Deployed virtual machines and virtual networks; managed Azure AD identities, roles and MFA; configured backups, monitoring and security settings.",
    tech: ["Azure VMs", "VNets", "Entra ID", "MFA", "Backup", "Monitor"],
  },
  {
    title: "Microsoft 365 Admin Lab",
    tag: "Productivity",
    description:
      "Configured Exchange mailboxes and user accounts; resolved login, MFA and licensing issues; managed admin roles and security policies.",
    tech: ["M365 Admin", "Exchange", "Licensing", "Roles", "Security"],
  },
  {
    title: "Web Development",
    tag: "Bonus skill",
    description:
      "I also build web apps with Next.js, React and Node.js, including this portfolio. That makes me comfortable reading logs, working with APIs and troubleshooting beyond the desktop.",
    tech: ["Next.js", "React", "Node.js", "TypeScript", "Git"],
    href: "https://github.com/Bishes7",
  },
];

// Real support scenarios, told as tickets: problem → action → result.
export const tickets = [
  {
    id: "TKT-1042",
    priority: "High",
    source: "Internship",
    category: "MFA / Identity",
    title: "“I got a new phone and now I can’t log in to anything.”",
    problem:
      "The user’s MFA prompts were still going to their old phone, so they were locked out of Outlook and Teams in the middle of the workday.",
    action:
      "Verified their identity, reset their MFA registration in the admin centre, then talked them through setting up Microsoft Authenticator on the new phone, one step at a time.",
    result:
      "Back to work on the same call. I wrote the steps up as a quick guide so the next lockout would be even faster.",
  },
  {
    id: "TKT-1057",
    priority: "High",
    source: "Internship",
    category: "Onboarding",
    title: "“Our new starter begins Monday and nothing is set up.”",
    problem:
      "A new employee needed an account, email, the right access and a working laptop before their first day.",
    action:
      "Created the user in Active Directory, added the right security groups, assigned an M365 licence and set up their mailbox. Then I prepared the laptop and tested a full sign-in as the user.",
    result:
      "Ready on day one: they logged in, opened email and got straight to work, with no first-morning scramble.",
  },
  {
    id: "TKT-1063",
    priority: "Medium",
    source: "Internship",
    category: "Hardware / Printing",
    title: "“The printer says it’s printing, but nothing comes out.”",
    problem:
      "Print jobs were stuck in the queue and the user had documents due for a meeting.",
    action:
      "Checked the printer’s network connection, cleared the stuck queue, restarted the print spooler and reinstalled the driver on the affected PC.",
    result:
      "Printing again within minutes. I logged the fix in the ticketing system for anyone who sees the same issue.",
  },
  {
    id: "TKT-1078",
    priority: "Low",
    source: "Homelab",
    category: "Linux / Automation",
    title: "“Five new Linux accounts: do it once, not five times.”",
    problem:
      "Creating several Ubuntu user accounts by hand is slow, repetitive and easy to get wrong.",
    action:
      "Wrote a Bash script that reads a list of new hires and creates each account with a home directory and shell, then checked the results in /etc/passwd.",
    result:
      "All five accounts created in one run, identical and error-free. The screenshots are in my labs below.",
  },
];

export const ticketSteps = [
  {
    step: "01",
    title: "Listen & log",
    text: "Understand what the user is actually trying to do, capture the details and log a clear ticket.",
  },
  {
    step: "02",
    title: "Diagnose",
    text: "Reproduce the issue, check the obvious first (account, MFA, network, device) and narrow it down.",
  },
  {
    step: "03",
    title: "Resolve or escalate",
    text: "Fix it at first contact where possible — or escalate with everything the next level needs.",
  },
  {
    step: "04",
    title: "Document & follow up",
    text: "Write up the fix so it’s faster next time, and confirm the user is back to work.",
  },
];

export const education = [
  {
    title: "ICT Professional Year Program",
    org: "QIBA, Hobart",
    period: "Feb 2026 – Present",
  },
  {
    title: "Bachelor of Information Technology",
    org: "CIHE",
    period: "Completed Oct 2025",
  },
];

export const certifications = [
  {
    code: "AZ-900",
    name: "Microsoft Azure Fundamentals",
    status: "Certified · Feb 2024",
    done: true,
  },
  {
    code: "MS-900",
    name: "Microsoft 365 Fundamentals",
    status: "Certified · Sep 2024",
    done: true,
  },
  {
    code: "AZ-104",
    name: "Microsoft Azure Administrator",
    status: "In progress · Expected Dec 2026",
    done: false,
  },
];

export const extras = [
  "Full-time work rights (485 visa)",
  "Australian driver’s licence",
  "Based in Launceston — open to Hobart & remote",
];

// Public URL of the site. Set NEXT_PUBLIC_SITE_URL once you have a custom domain;
// on Vercel it falls back to the project's production URL automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
