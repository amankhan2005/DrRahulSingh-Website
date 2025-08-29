import emergency from "./assets/Facilities/emergency.jpg";
import icu from "./assets/Facilities/ICU.jpg";
import privateRoom from "./assets/Facilities/Private.jpg";
import genral from "./assets/Facilities/General-care.jpg";

export const facilities = [
 {
    "id": 1,
    "title": "Emergency Care",
    "link": "emergency",
    "description": "Our Emergency & Trauma Care Department provides immediate, life-saving treatment for patients facing critical medical or surgical emergencies. Available 24/7, our unit is equipped with advanced resuscitation systems, trauma bays, and rapid diagnostic support to ensure the fastest possible response. We specialize in managing cardiac arrests, strokes, road accidents, fractures, burns, poisoning, and other critical conditions. With a dedicated team of emergency physicians, trauma surgeons, and paramedics, we deliver world-class emergency care when every second matters.",
    "image": `${emergency}`,  
    "services": [
      "24/7 emergency medical response",
      "Advanced trauma and accident care",
      "Stroke and cardiac emergency management",
      "Critical care ambulance services",
      "On-site diagnostic and radiology support"
    ],
    "details": [
      {
        "title": "Who Needs Emergency Care?",
        "description": "Emergency services are vital for anyone experiencing sudden and severe medical conditions such as chest pain, difficulty breathing, loss of consciousness, severe bleeding, high fever with seizures, poisoning, burns, major fractures, or injuries caused by accidents."
      },
      {
        "title": "Types of Emergency Treatments",
        "description": "Our emergency department provides a wide range of immediate treatments including CPR and cardiac life support, wound management, fracture stabilization, burn treatment, stroke interventions, and rapid surgical care for trauma cases. We also offer poisoning management and critical respiratory support with ventilators."
      },
      {
        "title": "Specialized Emergency Teams",
        "description": "Our multidisciplinary team includes emergency physicians, trauma surgeons, cardiologists, neurologists, and critical care specialists. Together, they ensure quick diagnosis, effective treatment, and seamless transition to ICU or operation theatres when required."
      },
      {
        "title": "Ambulance & Pre-Hospital Care",
        "description": "Our fleet of fully equipped ambulances provides rapid response with paramedics trained in advanced life support. Critical care ambulances carry ventilators, defibrillators, oxygen support, and monitoring systems to deliver expert care during patient transport."
      }
    ],
    "faqs": [
      {
        "question": "What types of emergencies do you treat?",
        "answer": "We handle a wide range of emergencies including heart attacks, strokes, accidents, fractures, severe bleeding, breathing difficulties, burns, poisoning, seizures, and trauma-related injuries."
      },
      {
        "question": "Is the emergency department open 24/7?",
        "answer": "Yes, our Emergency & Trauma Care services are available 24 hours a day, 7 days a week, including holidays."
      },
      {
        "question": "Do you provide ambulance services?",
        "answer": "Yes, we have a fleet of fully equipped ambulances with trained paramedics to provide rapid transport and emergency care en route to the hospital."
      },
      {
        "question": "How do you prioritize patients in emergency?",
        "answer": "We follow a triage system, which means patients are treated based on the severity and urgency of their condition rather than order of arrival."
      },
      {
        "question": "Do you handle pediatric emergencies?",
        "answer": "Yes, our emergency unit is equipped to handle pediatric emergencies, including trauma, respiratory distress, high fever, seizures, and accidental injuries."
      },
      {
        "question": "What should I do in case of a medical emergency?",
        "answer": "Call our emergency helpline immediately or use our ambulance service. While waiting, ensure the patient is safe, avoid giving food or drink, and follow basic first aid measures if trained."
      }
    ]
  },

  
  {
    "id": 2,
    "title": "ICU",
    "link": "icu",
    "description": "Our Intensive Care Unit (ICU) is designed to provide life-saving treatment for patients with critical conditions. With state-of-the-art medical equipment, including ventilators, defibrillators, and continuous monitoring systems, we offer comprehensive care for patients requiring close observation. Our team of intensivists, nurses, and specialists works around the clock to stabilize and treat life-threatening conditions. The ICU is structured to manage a variety of emergencies, including cardiac, respiratory, and neurological cases. Our focus is on providing immediate, high-quality care to ensure the best possible patient outcomes.",
    "image": `${icu}`,
    "services": [
      "24/7 critical care monitoring",
      "Advanced ventilator support",
      "Cardiac and respiratory care",
      "Emergency trauma management",
      "Specialized infection control"
    ],
    "details": [
      {
        "title": "Who Needs ICU Care?",
        "description": "ICU care is required for patients experiencing severe medical conditions that require constant monitoring and immediate intervention. This includes patients with respiratory failure, severe infections such as sepsis, post-surgical complications, cardiac arrests, strokes, traumatic injuries, and organ failure. The ICU is also essential for patients who need mechanical ventilation, dialysis, or advanced life-support treatments to stabilize their condition and aid recovery."
      },
      {
        "title": "Types of Treatments in ICU",
        "description": "Our ICU provides a range of advanced treatments tailored to critically ill patients. These include mechanical ventilation for respiratory distress, intravenous (IV) fluid management, emergency dialysis for kidney failure, and continuous cardiac monitoring. Patients may also receive life-saving medications, sedation for pain relief, and nutritional support via enteral or parenteral feeding methods. Our multidisciplinary team collaborates to provide the best care, including physical therapy to prevent complications from prolonged immobility."
      },
      {
        "title": "Post-ICU Recovery and Rehabilitation",
        "description": "Recovery from critical illness often requires a structured rehabilitation plan. Our team provides post-ICU care, including physical and respiratory therapy, psychological support, and nutritional guidance. Many patients experience muscle weakness, cognitive difficulties, or emotional distress after an ICU stay. We offer comprehensive support to ensure a smooth transition from intensive care to general wards or home care, including follow-up visits and specialized outpatient rehabilitation programs."
      },
      {
        "title": "ICU Family Support and Communication",
        "description": "We understand that having a loved one in the ICU can be overwhelming. Our ICU team ensures transparent communication with families, providing regular updates on the patient's condition and treatment plan. We encourage family involvement in decision-making and offer psychological counseling to help cope with stress. Our hospital provides visiting hours and guidance on how families can support the recovery process while ensuring patient safety and infection control."
      }
    ],
    "faqs": [
      {
        "question": "What is an Intensive Care Unit (ICU)?",
        "answer": "An Intensive Care Unit (ICU) is a specialized hospital department that provides continuous monitoring and advanced medical care for critically ill patients. It is equipped with life-support systems and staffed by specially trained healthcare professionals."
      },
      {
        "question": "When does a patient need ICU admission?",
        "answer": "Patients are admitted to the ICU when they require intensive monitoring, life-support treatments, or specialized care for conditions such as respiratory failure, sepsis, major surgery recovery, cardiac arrest, severe trauma, or neurological emergencies."
      },
      {
        "question": "What types of equipment are used in the ICU?",
        "answer": "The ICU is equipped with ventilators for breathing support, cardiac monitors, defibrillators, dialysis machines, infusion pumps, and other advanced medical devices to monitor and treat critically ill patients."
      },
      {
        "question": "How long does a patient stay in the ICU?",
        "answer": "The duration of an ICU stay varies based on the severity of the illness, the patient’s response to treatment, and the need for specialized interventions. Some patients may stay for a few days, while others require weeks of intensive care."
      },
      {
        "question": "Can family members visit patients in the ICU?",
        "answer": "Yes, most ICUs allow family visits during designated hours. However, visiting policies may vary depending on hospital guidelines and patient conditions. Family members are encouraged to follow hygiene protocols to prevent infections."
      },
      {
        "question": "What happens after a patient is discharged from the ICU?",
        "answer": "After ICU discharge, patients may be transferred to a general hospital ward, a rehabilitation center, or receive home care. Follow-up visits, therapy sessions, and continued monitoring help ensure a successful recovery."
      },
      {
        "question": "What are the risks of staying in the ICU?",
        "answer": "While ICU care is lifesaving, prolonged stays may lead to complications such as infections, muscle weakness, or delirium. Our team takes preventive measures, including early mobilization, infection control protocols, and psychological support to reduce risks."
      },
      {
        "question": "What is ventilator support, and when is it needed?",
        "answer": "Ventilator support is used for patients who cannot breathe adequately on their own due to conditions such as pneumonia, acute respiratory distress syndrome (ARDS), or neurological disorders. The ventilator assists with breathing until the patient can do so independently."
      },
      {
        "question": "How do ICU doctors and nurses monitor patients?",
        "answer": "ICU teams continuously monitor patients using advanced systems that track vital signs, oxygen levels, heart function, and organ activity. Nurses and doctors assess data in real-time to make critical decisions about treatment."
      },
      {
        "question": "How does the ICU help in the recovery of post-surgical patients?",
        "answer": "The ICU provides intensive monitoring and support for patients recovering from complex surgeries. This includes pain management, respiratory support, infection prevention, and wound care to ensure a smooth recovery process."
      }
    ]
  },
  {
    "id": 3,
    "title": "General Care",
    "link": "general-care",
    "description": "Our General Care ward provides affordable yet high-quality medical care for patients requiring hospitalization. Designed to accommodate multiple patients in a shared setting, the ward ensures cleanliness, hygiene, and round-the-clock medical supervision. With trained medical staff and access to essential healthcare services, we focus on ensuring patients receive the necessary treatment and support during their recovery. The ward offers comfortable bedding, nutritious meals, and assistance with daily activities, helping patients regain their health in a compassionate and cost-effective environment. We prioritize patient well-being, offering personalized attention while maintaining a safe and supportive healing atmosphere.",
    "image": `${genral}`,
    "services": [
      "24/7 medical supervision",
      "Basic nursing care",
      "Hygienic and clean environment",
      "Regular doctor visits",
      "Affordable treatment options"
    ],
    "details": [
      {
        "title": "Who Needs General Care?",
        "description": "The General Care ward is ideal for patients requiring hospitalization for non-critical conditions that do not require intensive monitoring. It caters to individuals recovering from surgery, infections, or chronic illnesses that need medical supervision and assistance. Patients who require post-operative care, intravenous (IV) medications, physical therapy, or nutritional support may also benefit from general ward care. Additionally, those who need extended hospitalization but do not require ICU-level monitoring can receive cost-effective treatment in a comfortable and supervised environment."
      },
      {
        "title": "Types of Treatments in General Care",
        "description": "Our General Care ward provides a wide range of treatments tailored to patient needs. This includes administration of medications, wound care, oxygen therapy, IV fluids, and pain management. The ward also offers post-operative recovery support, including physiotherapy, rehabilitation, and nutritional care. Regular doctor visits and health assessments ensure that patients' progress is closely monitored, while nursing staff provide assistance with daily activities, mobility, and hygiene to promote a smooth recovery."
      },
      {
        "title": "Facilities and Amenities",
        "description": "We strive to create a comfortable healing environment in our General Care ward. Patients receive clean bedding, nutritious meals planned by dietitians, and access to personal hygiene facilities. The ward maintains high standards of sanitation to prevent infections, and there are designated visiting hours to allow family support. Additionally, we provide psychological and emotional support for patients who may need counseling or stress management during their recovery period."
      },
      {
        "title": "Transitioning from Hospital to Home",
        "description": "Before discharge, patients undergo a final health assessment to ensure they are fit to leave the hospital. Our medical team provides guidance on post-hospitalization care, including medication schedules, dietary recommendations, and follow-up appointments. Patients and their caregivers are educated on home care procedures, wound management (if applicable), and recognizing warning signs that may require medical attention. We aim to ensure a smooth transition from hospital to home for continued recovery."
      }
    ],
    "faqs": [
      {
        "question": "What is General Care in a hospital?",
        "answer": "General Care refers to non-intensive medical supervision for patients who require hospitalization but do not need critical care. It includes routine medical treatment, nursing support, and assistance with recovery."
      },
      {
        "question": "Who should be admitted to the General Care ward?",
        "answer": "Patients recovering from surgery, infections, chronic illnesses, or those requiring post-operative care, IV fluids, or physiotherapy may be admitted to the General Care ward."
      },
      {
        "question": "How is General Care different from ICU care?",
        "answer": "General Care provides basic medical supervision and support for stable patients, while ICU care is for critically ill patients who require continuous monitoring and advanced life-support systems."
      },
      {
        "question": "Can family members visit patients in General Care?",
        "answer": "Yes, family members can visit during designated visiting hours. However, hospital policies may vary regarding the number of visitors and visiting times."
      },
      {
        "question": "What medical treatments are provided in the General Care ward?",
        "answer": "Patients receive medications, wound care, IV fluids, oxygen therapy, physiotherapy, and regular medical check-ups to support recovery."
      },
      {
        "question": "How long do patients stay in the General Care ward?",
        "answer": "The duration of stay depends on the patient's condition and recovery progress. Some patients may require only a few days, while others might need extended care."
      },
      {
        "question": "What amenities are available for patients in General Care?",
        "answer": "Patients receive clean bedding, nutritious meals, hygiene facilities, and regular medical supervision. The ward is maintained to ensure a safe and comfortable recovery environment."
      },
      {
        "question": "Will I receive regular doctor visits in General Care?",
        "answer": "Yes, doctors conduct routine check-ups to monitor your recovery and adjust treatment as needed. Nurses and other healthcare professionals are available round the clock for support."
      },
      {
        "question": "How does the hospital ensure hygiene in the General Care ward?",
        "answer": "Our hospital follows strict hygiene and sanitation protocols, including regular cleaning, infection control measures, and proper waste disposal to maintain a safe environment."
      },
      {
        "question": "What happens when a patient is ready for discharge?",
        "answer": "Before discharge, patients receive a medical evaluation, medication guidelines, home care instructions, and follow-up appointment details to ensure continued recovery after leaving the hospital."
      }
    ]
  },
  
  {
    "id": 4,
    "title": "Private Care",
    "link": "private-care",
    "description": "Our Private Rooms are designed to provide patients with comfort, privacy, and personalized medical care. Each room is equipped with modern amenities, including an adjustable hospital bed, television, Wi-Fi, and a private washroom. Patients receive dedicated nursing care and personalized attention from doctors. The rooms are spacious, air-conditioned, and provide a peaceful environment conducive to recovery. Family members are allowed flexible visiting hours, ensuring emotional support for the patient. We focus on delivering a comfortable and stress-free healing experience while maintaining top-notch medical care.",
    "image": `${privateRoom}`,
    "services": [
      "Dedicated nursing care",
      "Private and peaceful environment",
      "Flexible visiting hours",
      "Modern room amenities",
      "Personalized diet and nutrition plans"
    ],
    "details": [
      {
        "title": "Who Needs Private Care?",
        "description": "Private Care is ideal for patients who require hospitalization but prefer a private and comfortable setting. It is suitable for individuals recovering from surgery, chronic illnesses, or other medical conditions that require close monitoring and dedicated nursing care. Patients who value privacy, personalized attention, and a stress-free healing environment benefit most from private rooms. It is also preferred by individuals who need extended hospitalization and want a peaceful space for recovery."
      },
      {
        "title": "Key Features of Private Care",
        "description": "Our Private Rooms offer modern facilities to ensure maximum comfort and convenience. Each room is air-conditioned and includes an adjustable hospital bed, a personal television, high-speed Wi-Fi, and a private washroom. Patients also receive personalized diet plans designed by professional dietitians. Flexible visiting hours allow family members to provide emotional support, contributing to faster recovery."
      },
      {
        "title": "Personalized Medical Attention",
        "description": "Patients in Private Care receive one-on-one nursing attention, ensuring timely medication administration, regular health assessments, and quick response to medical needs. Doctors provide personalized consultations and treatment plans based on the patient's health condition. Our staff ensures a compassionate and responsive approach to patient care, making the healing journey comfortable and effective."
      },
      {
        "title": "Benefits of Private Care",
        "description": "Private Care offers several advantages, including enhanced privacy, a peaceful healing environment, and personalized medical services. The dedicated nursing staff ensures that patient needs are met promptly, while modern amenities help create a comfortable stay. With flexible visiting hours, patients receive essential emotional support from their loved ones. Additionally, private rooms reduce the risk of infections that may occur in shared hospital spaces."
      },
      {
        "title": "Transitioning from Hospital to Home",
        "description": "Before discharge, patients undergo a final health assessment to ensure a smooth transition home. Our medical team provides detailed guidance on post-hospitalization care, including medication schedules, dietary recommendations, and follow-up appointments. Caregivers receive instructions on home-based patient management, helping ensure continued recovery after discharge."
      }
    ],
    "faqs": [
      {
        "question": "What is Private Care in a hospital?",
        "answer": "Private Care refers to hospital rooms designed for patients who prefer privacy, personalized medical attention, and modern amenities during their hospital stay."
      },
      {
        "question": "What amenities are provided in Private Care rooms?",
        "answer": "Private rooms include an adjustable hospital bed, television, Wi-Fi, private washroom, air conditioning, and personalized diet plans to ensure a comfortable recovery."
      },
      {
        "question": "Who should choose Private Care?",
        "answer": "Patients who require hospitalization but prefer privacy, personalized care, and a peaceful environment should opt for Private Care."
      },
      {
        "question": "Can family members stay with the patient in a Private Room?",
        "answer": "Family members are allowed flexible visiting hours, and some private rooms may accommodate an overnight companion, depending on hospital policy."
      },
      {
        "question": "How does Private Care differ from General Ward care?",
        "answer": "Private Care offers exclusive rooms, dedicated nursing, modern amenities, and flexible visiting hours, while General Ward care involves shared spaces with basic facilities."
      },
      {
        "question": "Does Private Care include personalized diet plans?",
        "answer": "Yes, our dietitians create customized nutrition plans based on the patient's health condition and dietary preferences."
      },
      {
        "question": "How is infection control managed in Private Care?",
        "answer": "Private rooms help reduce infection risks by providing a separate environment, regular sanitation, and limited patient interactions."
      },
      {
        "question": "Are medical treatments different in Private Care?",
        "answer": "The medical treatments remain the same as other hospital wards, but Private Care offers additional comfort, privacy, and personalized attention."
      },
      {
        "question": "What is the cost of Private Care compared to General Care?",
        "answer": "Private Care typically costs more than General Ward care due to added amenities, personalized services, and dedicated nursing staff."
      },
      {
        "question": "How long can a patient stay in a Private Room?",
        "answer": "The length of stay depends on the patient's medical condition and doctor's recommendation. Some patients may require only a short stay, while others may need extended hospitalization."
      }
    ]
  }
  
];
