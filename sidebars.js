const sidebars = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: '❤️ Cardiology',
      collapsed: false,
      items: [
        'cardiology/acute-coronary-syndrome',
        'cardiology/atrial-fibrillation',
        'cardiology/heart-failure',
        'cardiology/hypertension',
        'cardiology/valvular-disease',
        'cardiology/pericardial-disease',
        'cardiology/syncope',
      ],
    },
    {
      type: 'category',
      label: '🫁 Pulmonary',
      items: [
        'pulmonary/asthma',
        'pulmonary/copd',
        'pulmonary/pneumonia',
        'pulmonary/pulmonary-embolism',
        'pulmonary/pleural-effusion',
        'pulmonary/interstitial-lung-disease',
      ],
    },
    {
      type: 'category',
      label: '⚡ Critical Care',
      items: [
        'critical-care/sepsis',
        'critical-care/shock',
        'critical-care/ards',
        'critical-care/mechanical-ventilation',
      ],
    },
    {
      type: 'category',
      label: '🍽️ GI & Hepatology',
      items: [
        'gi/gi-bleeding',
        'gi/cirrhosis',
        'gi/pancreatitis',
        'gi/ibd',
        'gi/hepatitis',
        'gi/gerd-pud',
      ],
    },
    {
      type: 'category',
      label: '🫘 Nephrology',
      items: [
        'nephrology/acute-kidney-injury',
        'nephrology/chronic-kidney-disease',
        'nephrology/electrolyte-disorders',
        'nephrology/acid-base',
        'nephrology/glomerular-disease',
      ],
    },
    {
      type: 'category',
      label: '🧬 Endocrine',
      items: [
        'endocrine/diabetes',
        'endocrine/thyroid-disorders',
        'endocrine/adrenal-disorders',
        'endocrine/pituitary-disorders',
        'endocrine/calcium-disorders',
      ],
    },
    {
      type: 'category',
      label: '🩸 Hematology & Oncology',
      items: [
        'heme-onc/anemia',
        'heme-onc/bleeding-clotting',
        'heme-onc/leukemia-lymphoma',
        'heme-onc/common-solid-tumors',
      ],
    },
    {
      type: 'category',
      label: '🦠 Infectious Disease',
      items: [
        'id/cellulitis-ssti',
        'id/uti-pyelonephritis',
        'id/endocarditis',
        'id/meningitis',
        'id/hiv-aids',
        'id/tuberculosis',
      ],
    },
    {
      type: 'category',
      label: '🦴 Rheumatology',
      items: [
        'rheum/ra-sle',
        'rheum/vasculitis',
        'rheum/gout-crystal-arthropathy',
        'rheum/seronegative-spondyloarthropathies',
      ],
    },
    {
      type: 'category',
      label: '🧠 Neurology',
      items: [
        'neuro/stroke',
        'neuro/seizures',
        'neuro/headache',
        'neuro/dementia-delirium',
      ],
    },
    {
      type: 'category',
      label: '🩺 Ambulatory & Prevention',
      items: [
        'ambulatory/preventive-care',
        'ambulatory/lipid-management',
        'ambulatory/smoking-cessation',
        'ambulatory/depression-anxiety',
      ],
    },
  ],
};

module.exports = sidebars;
