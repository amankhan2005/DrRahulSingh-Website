// src/pages/BrainPage.jsx

// -- keep your actual image imports / paths here --

import DocImg from "../assets/brain/doctor-hero.png";
import ImgBrainTumor from "../assets/brain/brain-tumor.jpg";
import ImgPediatric from "../assets/brain/pediatric.jpg";
import ImgInfective from "../assets/brain/infective.jpg";
import ImgCSF from "../assets/brain/csf-rhinorrhea.jpg";
import ImgCerebrovascular from "../assets/brain/cerebrovascular.jpg";
import ImgHydrocephalus from "../assets/brain/hydrocephalus.png";
import ImgGeriatric from "../assets/brain/geriatric.jpg";
import ImgHematoma from "../assets/brain/chronic-subdural-hematoma.jpg";
import ImgTBI from "../assets/brain/traumatic-brain-injury.png";
import ImgFunctional from "../assets/brain/functional-neurosurgery.jpeg";
import BrainSurgery from "../components/BrainSurgery"

const topics = [
  {
    id: "brain-tumor",
    title: "Brain Tumor",
    image: ImgBrainTumor,
    content: `
      <h3><strong>What are Brain Tumors?</strong></h3>
      <p>
        Brain tumors are abnormal growths of cells within the cranial vault or central nervous system. 
        They may arise primarily in the brain (primary brain tumors) or migrate from cancers elsewhere 
        in the body (metastatic tumors). Tumor behavior ranges from slowly enlarging benign lesions to 
        highly aggressive malignant tumors that require multidisciplinary therapy. Regardless of histology, 
        a space-occupying lesion in the skull can compromise brain tissue, cerebrospinal fluid dynamics, 
        and intracranial pressure — producing symptoms that often prompt evaluation.
      </p>

      <h3><strong>Causes & Risk Factors</strong></h3>
      <p>
        While exact causes are often unknown, risk factors include genetic syndromes (e.g., neurofibromatosis, 
        Li-Fraumeni), prior radiation exposure to the head, and certain hereditary predispositions. Age, 
        tumor location, and molecular markers (such as IDH mutation, 1p/19q codeletion) influence prognosis 
        and therapeutic choices more than many classical epidemiologic risk factors.
      </p>

      <h3><strong>Common Symptoms</strong></h3>
      <ul>
        <li>Headache that may worsen in the morning or with Valsalva maneuvers</li>
        <li>New-onset seizures</li>
        <li>Focal neurologic deficits such as limb weakness, speech disturbance, or sensory changes</li>
        <li>Visual or hearing disturbances</li>
        <li>Cognitive decline, personality changes, nausea or vomiting from raised intracranial pressure</li>
      </ul>

      <h3><strong>Diagnostic Evaluation</strong></h3>
      <p>
        Diagnosis starts with a detailed neurologic exam and high-quality neuroimaging. Contrast-enhanced 
        MRI with dedicated sequences is the investigation of choice; CT can be useful in emergency settings 
        to detect hemorrhage or calcification. Advanced imaging (MR spectroscopy, diffusion, perfusion, PET) 
        can provide biological clues. Definitive diagnosis usually requires histopathological and molecular 
        characterization obtained via biopsy or resection.
      </p>

      <h3><strong>Treatment Principles</strong></h3>
      <p>
        Management is individualized by tumor type, size, location, patient performance status, and molecular profile:
      </p>
      <ul>
        <li><strong>Surgery:</strong> Maximal safe resection while preserving neurologic function.</li>
        <li><strong>Radiation therapy:</strong> Fractionated radiotherapy or stereotactic radiosurgery.</li>
        <li><strong>Chemotherapy & Targeted Therapy:</strong> Temozolomide and molecularly targeted agents.</li>
        <li><strong>Supportive care:</strong> Steroids, antiepileptic drugs, VTE prophylaxis, rehabilitation.</li>
      </ul>

      <h3><strong>Rehabilitation & Survivorship</strong></h3>
      <p>
        Recovery often requires coordinated rehabilitation — physiotherapy, occupational therapy, speech 
        therapy, and neuropsychological support. Long-term follow-up with serial imaging and clinical 
        assessment is essential for recognizing recurrence and addressing functional needs.
      </p>

      <h3><strong>Outlook</strong></h3>
      <p>
        Prognosis varies considerably. Low-grade tumors (e.g., pilocytic astrocytoma, meningioma) often 
        have favorable outcomes with appropriate treatment. High-grade gliomas carry higher morbidity and 
        mortality; however, advances in molecular profiling and multimodality therapy have improved survival 
        and quality of life in many patients. Early diagnosis and treatment at a specialized center with a 
        multidisciplinary team provide the best chance for optimal results.
      </p>

      <p><em>
        For personalized assessment and to discuss treatment options, please consult a neurosurgeon or neuro-oncology team.
      </em></p>
    `,
  },
  {
    id: "pediatric",
    title: "Pediatric Brain Disorders",
    image: ImgPediatric,
    content: `<h3><strong>Introduction</strong></h3>
<p>
  Pediatric brain disorders include congenital malformations, developmental disorders, epilepsy, 
  pediatric brain tumors, and conditions acquired early in life such as infections, hemorrhage, or trauma. 
  Because the child’s brain develops rapidly during infancy and childhood, early identification and 
  tailored interventions are critical to optimize long-term functional outcomes.
</p>

<h3><strong>Common Pediatric Conditions</strong></h3>
<ul>
  <li><strong>Congenital malformations:</strong> Neural tube defects, Chiari malformations, cortical dysplasia, 
      and other structural anomalies that may present in infancy or childhood.</li>
  <li><strong>Pediatric brain tumors:</strong> Including medulloblastoma, pilocytic astrocytoma, ependymoma, 
      and atypical teratoid rhabdoid tumor (ATRT).</li>
  <li><strong>Hydrocephalus:</strong> Excess CSF accumulation causing increased intracranial pressure and 
      potentially progressive head enlargement in infants.</li>
  <li><strong>Epilepsy:</strong> Seizure disorders with structural, metabolic, or genetic origins.</li>
  <li><strong>Perinatal brain injury & cerebral palsy:</strong> Injury occurring before, during, or after birth 
      producing motor and cognitive impairments.</li>
</ul>

<h3><strong>Clinical Presentation</strong></h3>
<p>
  In children, presentation varies by age: infants may show poor feeding, irritability, increasing head 
  circumference, or developmental delay. Older children commonly present with headaches, vomiting, behavior 
  changes, seizures, or focal neurologic signs. Parents’ observations about milestones and behavior are often 
  the first clue.
</p>

<h3><strong>Diagnostic Strategy</strong></h3>
<p>
  High-resolution MRI is the cornerstone of evaluation. EEG is critical when seizures are suspected. Genetic 
  testing, metabolic panels, and neurodevelopmental assessments are integrated when indicated. A multidisciplinary 
  pediatric neurosurgery and neurology team ensures precise diagnosis and a developmentally aware management plan.
</p>

<h3><strong>Treatment Approaches</strong></h3>
<ul>
  <li><strong>Surgical interventions:</strong> Tumor resection, repair of malformations, shunt placement, or 
      endoscopic third ventriculostomy (ETV) for hydrocephalus.</li>
  <li><strong>Medical therapy:</strong> Antiepileptic drugs, antimicrobials for infections, and targeted agents 
      for tumors with specific molecular drivers.</li>
  <li><strong>Rehabilitation:</strong> Early intervention programs, physiotherapy, occupational therapy, speech 
      and language therapy, and special education support.</li>
  <li><strong>Family-centered care:</strong> Counseling, genetic counseling when relevant, and social support 
      to help families navigate long-term therapy.</li>
</ul>

<h3><strong>Prognosis & Long-term Care</strong></h3>
<p>
  Outcomes depend on the underlying condition, timing of intervention, and access to comprehensive rehabilitation. 
  Many children achieve significant gains with timely management. Lifelong follow-up with a pediatric 
  neurology/neurosurgery team helps address developmental, educational, and psychosocial needs as the child grows.
</p>

<p><em>
  When to seek urgent attention: sudden lethargy, persistent vomiting, worsening headaches, new focal weakness, 
  or uncontrolled seizures — these warrant immediate medical evaluation.
</em></p>
`,
  },
  {
    id: "infective",
    title: "Infective Brain Disorders",
    image: ImgInfective,
    content: `<h3><strong>Overview</strong></h3>
<p>
  Infective brain disorders encompass meningitis, encephalitis, brain abscesses, tubercular CNS disease, 
  and parasitic infections such as neurocysticercosis. These conditions carry significant morbidity and 
  mortality if not recognized and treated promptly. Early diagnosis, targeted antimicrobial therapy, 
  and supportive critical care are the pillars of effective management.
</p>

<h3><strong>Etiology</strong></h3>
<p>
  Pathogens include bacteria (e.g., Streptococcus pneumoniae, Neisseria meningitidis), viruses 
  (Herpes simplex virus, enteroviruses), fungi (in immunocompromised patients), Mycobacterium tuberculosis, 
  and parasites. The patient’s immune status, recent surgeries, trauma, or systemic infections often guide 
  the likely causative organisms.
</p>

<h3><strong>Clinical Features</strong></h3>
<ul>
  <li>Fever and severe headache</li>
  <li>Neck stiffness (classic for meningitis)</li>
  <li>Altered mental status, confusion, or coma</li>
  <li>Focal neurological deficits or seizures (common in brain abscess and encephalitis)</li>
  <li>Nausea, vomiting, and signs of increased intracranial pressure</li>
</ul>

<h3><strong>Diagnostic Workup</strong></h3>
<p>
  Urgent neuroimaging (CT/MRI) is often performed first if there are focal signs or suspected raised 
  intracranial pressure. Lumbar puncture with CSF analysis (cell count, glucose, protein, Gram stain, 
  culture, PCR) is fundamental for meningitis/encephalitis except when contraindicated. Blood cultures, 
  serology, and targeted PCR assays refine diagnosis and help tailor therapy.
</p>

<h3><strong>Management</strong></h3>
<ul>
  <li><strong>Empiric antimicrobial therapy:</strong> Prompt empiric intravenous antibiotics and, where indicated, 
      antivirals (e.g., acyclovir for suspected HSV encephalitis) should be initiated early, tailored thereafter 
      according to microbiology results.</li>
  <li><strong>Surgical drainage:</strong> Indicated for large brain abscesses causing mass effect or not responding 
      to medical therapy.</li>
  <li><strong>Supportive care:</strong> ICU-level monitoring for airway, ventilation, intracranial pressure control, 
      seizure management, and hemodynamic support.</li>
  <li><strong>Adjuncts:</strong> Corticosteroids in specific scenarios (e.g., meningitis with significant edema), 
      targeted antifungals or anti-tubercular therapy where indicated.</li>
</ul>

<h3><strong>Complications & Follow-up</strong></h3>
<p>
  Survivors may have residual seizures, hearing loss, cognitive impairment, or focal deficits. Rehabilitation, 
  long-term anticonvulsant therapy, and neuropsychiatric support are important elements of recovery. Prevention 
  through vaccination programs and public health measures reduces the incidence of many severe CNS infections.
</p>

<p><em>
  Rapid evaluation of fever with neurological symptoms is essential — early treatment saves lives and function.
</em></p>
`,
  },
  {
    id: "csf",
    title: "CSF Rhinorrhea",
    image: ImgCSF,
    content: `<h3><strong>What is CSF Rhinorrhea?</strong></h3>
<p>
  CSF rhinorrhea refers to a communication between the subarachnoid space and sinonasal cavity 
  allowing cerebrospinal fluid to leak through the nose. This may be traumatic, iatrogenic 
  (post-surgical), spontaneous, or related to skull base lesions. Because the leak creates a direct 
  pathway for bacteria to access the meninges, CSF rhinorrhea poses a high risk for meningitis and 
  requires timely evaluation and often repair.
</p>

<h3><strong>Causes</strong></h3>
<ul>
  <li>Head trauma with skull base fracture</li>
  <li>Endoscopic sinus or pituitary surgery complications</li>
  <li>Spontaneous leaks associated with idiopathic intracranial hypertension</li>
  <li>Tumor erosion of the skull base</li>
  <li>Congenital skull base defects</li>
</ul>

<h3><strong>Presentation</strong></h3>
<p>
  Typical features include clear, watery nasal discharge that increases with leaning forward or 
  straining, salty taste at the back of the throat, recurrent meningitis, and sometimes headaches 
  or visual changes. The discharge classically tests positive for beta-2 transferrin, a protein 
  specific to CSF.
</p>

<h3><strong>Investigations</strong></h3>
<p>
  Confirmatory testing begins with analysis of nasal discharge (beta-2 transferrin). Thin-slice CT 
  of the skull base and MR cisternography localize the defect. Endoscopic nasal evaluation and 
  intrathecal fluorescein (in specialized centers) can help identify small leaks intraoperatively.
</p>

<h3><strong>Treatment Options</strong></h3>
<ul>
  <li><strong>Conservative measures:</strong> Bed rest, head elevation, stool softeners, avoidance of straining, 
      and acetazolamide may suffice for some small traumatic leaks; however, persistent leaks commonly require surgery.</li>
  <li><strong>Endoscopic endonasal repair:</strong> The modern standard for most anterior skull base leaks. 
      Using an endoscope, the defect is repaired with autologous grafts (fat, fascia lata), mucosal flaps 
      (e.g., Hadad-Bassagasteguy nasoseptal flap), and tissue sealants.</li>
  <li><strong>Open craniotomy repair:</strong> Reserved for complex posterior defects, large defects, 
      or when endoscopic repair is not feasible.</li>
</ul>

<h3><strong>Outcomes & Follow-up</strong></h3>
<p>
  Endoscopic repair has high success rates (often &gt;90%) with minimal morbidity when performed by an 
  experienced skull-base team. Patients are advised to avoid nose-blowing, heavy lifting, and straining 
  for several weeks after repair. Early repair prevents meningitis and restores normal quality of life.
</p>

<p><em>
  If you suspect a CSF leak — recurrent clear unilateral rhinorrhea or a history of trauma/surgery — 
  seek neurosurgical and ENT evaluation promptly.
</em></p>
`,
  },
  {
    id: "cerebrovascular",
    title: "Cerebrovascular Disorders (Aneurysms & AVMs)",
    image: ImgCerebrovascular,
    content: `<h3><strong>Overview</strong></h3>
<p>
  Cerebrovascular disorders include ischemic and hemorrhagic strokes, intracranial aneurysms, 
  and arteriovenous malformations (AVMs). Aneurysms are focal arterial dilations prone to rupture, 
  causing subarachnoid hemorrhage; AVMs are congenital tangles of arteries and veins that may bleed 
  or cause seizures. Early detection and appropriate treatment are crucial to prevent catastrophic outcomes.
</p>

<h3><strong>Risk Factors</strong></h3>
<p>
  Hypertension, smoking, alcohol use, hyperlipidemia, and certain hereditary conditions 
  (e.g., polycystic kidney disease) increase the risk of aneurysm development or rupture. 
  AVMs are typically congenital and may present in young adults with hemorrhage or seizures.
</p>

<h3><strong>Clinical Features</strong></h3>
<ul>
  <li><strong>Unruptured lesions:</strong> Often asymptomatic, but may cause headaches, cranial nerve palsies, 
      or seizures depending on size and location.</li>
  <li><strong>Rupture:</strong> Sudden severe headache ("worst headache of life"), loss of consciousness, 
      vomiting, neck stiffness, focal deficits.</li>
</ul>

<h3><strong>Diagnostic Tools</strong></h3>
<p>
  Non-contrast CT detects acute hemorrhage. CT angiography and MR angiography visualize vascular anatomy. 
  Digital Subtraction Angiography (DSA) remains the gold standard for detailed mapping and for planning 
  endovascular therapy.
</p>

<h3><strong>Treatment Strategies</strong></h3>
<ul>
  <li><strong>Endovascular therapy:</strong> Coiling, stent-assisted coiling, flow diversion devices for aneurysms; 
      embolization for AVMs.</li>
  <li><strong>Microsurgical clipping:</strong> Safe option for surgically accessible aneurysms and definitive 
      AVM resection in selected cases.</li>
  <li><strong>Stereotactic radiosurgery:</strong> Focused radiation (Gamma Knife) for small AVMs or residual 
      lesions not amenable to open surgery.</li>
  <li><strong>Acute management:</strong> For subarachnoid hemorrhage — critical care support, nimodipine to reduce 
      vasospasm risk, and early securing of the aneurysm.</li>
</ul>

<h3><strong>Outcomes & Follow-up</strong></h3>
<p>
  Outcome depends on the rupture status and the timeliness of treatment. Securing aneurysms and treating AVMs 
  before hemorrhage dramatically reduces mortality and long-term disability. Long-term blood pressure control, 
  smoking cessation, and regular surveillance imaging for treated lesions are important components of care.
</p>

<p><em>
  Patients with a family history of aneurysm, polycystic kidney disease, or prior aneurysm should consider 
  vascular screening and counseling.
</em></p>
`,
  },
  {
    id: "hydrocephalus",
    title: "Hydrocephalus",
    image: ImgHydrocephalus,
    content: `<h3><strong>Definition</strong></h3>
<p>
  Hydrocephalus is a pathologic accumulation of cerebrospinal fluid (CSF) within the ventricular system 
  causing ventricular enlargement and increased intracranial pressure. It may be congenital or acquired 
  (post-hemorrhagic, post-infectious, tumor-related), and it affects both children and adults.
</p>

<h3><strong>Types</strong></h3>
<ul>
  <li><strong>Communicating hydrocephalus:</strong> Impaired absorption of CSF.</li>
  <li><strong>Non-communicating (obstructive):</strong> Blockage of CSF flow within the ventricular system 
      (e.g., aqueductal stenosis, tumor obstructing the third ventricle).</li>
  <li><strong>Normal Pressure Hydrocephalus (NPH):</strong> A condition in older adults with gait disturbance, 
      urinary incontinence, and cognitive decline.</li>
</ul>

<h3><strong>Clinical Presentation</strong></h3>
<p>
  Infants often present with increasing head circumference, bulging fontanelle, poor feeding, and irritability. 
  Older children and adults typically have headache, nausea, visual disturbances, gait difficulty, cognitive 
  decline, and urinary symptoms (particularly in NPH).
</p>

<h3><strong>Diagnosis</strong></h3>
<p>
  CT and MRI demonstrate ventricular enlargement. In suspected NPH, high-volume lumbar puncture or extended 
  CSF drainage tests can predict improvement with shunting. CSF flow studies and endoscopic assessment assist 
  decision-making in complex cases.
</p>

<h3><strong>Treatment Options</strong></h3>
<ul>
  <li><strong>Ventriculoperitoneal (VP) shunt:</strong> The most common treatment — diverts CSF from ventricles 
      to the peritoneal cavity. Modern programmable valves help tailor drainage to the patient.</li>
  <li><strong>Endoscopic third ventriculostomy (ETV):</strong> An internal bypass procedure that creates a CSF 
      outlet from the third ventricle to the subarachnoid space. ETV avoids lifelong shunt dependence in 
      appropriate obstructive cases.</li>
  <li><strong>Treat underlying causes:</strong> Tumor resection or infection control when hydrocephalus is secondary.</li>
</ul>

<h3><strong>Complications & Long-term Care</strong></h3>
<p>
  Shunt complications include infection, obstruction, over-drainage, and the need for revisions. Lifelong follow-up 
  is essential. For NPH, timely diagnosis and treatment can significantly improve gait, continence, and cognition.
</p>

<p><em>
  Discuss with a neurosurgical team experienced in pediatric and adult CSF disorders to determine the most durable 
  and safe approach.
</em></p>
`,
  },
  {
    id: "geriatric",
    title: "Geriatric Brain Disorders",
    image: ImgGeriatric,
    content: `<h3><strong>Scope</strong></h3>
<p>
  Geriatric brain disorders comprise a broad set of conditions that commonly affect older adults 
  including Alzheimer’s disease and other dementias, Parkinson’s disease and parkinsonian syndromes, 
  vascular cognitive impairment, normal pressure hydrocephalus, and increased susceptibility to stroke 
  and subdural hematomas. Managing these conditions requires a blend of neurology, neurosurgery, geriatrics, 
  and rehabilitation care tailored to the patient’s goals and comorbidities.
</p>

<h3><strong>Common Presentations</strong></h3>
<ul>
  <li>Progressive memory loss and impaired executive function</li>
  <li>Gait disturbance and falls</li>
  <li>Urinary incontinence in combination with gait and cognitive decline (suggestive of NPH)</li>
  <li>Tremor, rigidity, and bradykinesia (Parkinsonism)</li>
  <li>Post-acute stroke disability</li>
</ul>

<h3><strong>Diagnostic Considerations</strong></h3>
<p>
  Evaluation includes cognitive testing, brain imaging (MRI) to identify vascular changes, subdural collections, 
  or treatable lesions, and functional assessment to guide care plans. Medication reconciliation is critical 
  because polypharmacy frequently contributes to cognitive and mobility problems.
</p>

<h3><strong>Management Strategies</strong></h3>
<ul>
  <li><strong>Medication optimization:</strong> Cholinesterase inhibitors for selected dementias, levodopa for 
      Parkinson’s symptoms, and secondary prevention after stroke (antiplatelet or anticoagulation as indicated).</li>
  <li><strong>Surgical interventions:</strong> VP shunting for NPH, evacuation of chronic subdural hematoma, 
      or tumor removal when appropriate.</li>
  <li><strong>Rehabilitation:</strong> Multidisciplinary physiotherapy, occupational therapy, and speech therapy 
      to restore function and reduce fall risk.</li>
  <li><strong>Supportive care:</strong> Social support, caregiver education, home safety modifications, and 
      advanced care planning.</li>
</ul>

<h3><strong>Goals of Care</strong></h3>
<p>
  For elderly patients, goals often emphasize maintaining independence, minimizing hospitalizations, and 
  improving quality of life. Decisions about invasive interventions should consider frailty, comorbidities, 
  and patient values.
</p>

<p><em>
  Close collaboration between neurosurgeons, neurologists, geriatricians, and rehabilitation specialists 
  produces the best outcomes for elderly patients with brain disorders.
</em></p>
`,
  },
  {
    id: "hematoma",
    title: "Chronic Subdural Hematoma",
    image: ImgHematoma,
    content: `<h3><strong>What is a Chronic Subdural Hematoma?</strong></h3>
<p>
  A chronic subdural hematoma (CSDH) is a slowly developing collection of blood between the dura mater 
  and the arachnoid, typically occurring weeks after minor head trauma. CSDH is particularly common in 
  older adults due to brain atrophy that stretches bridging veins and increases vulnerability to bleeding 
  even after trivial injuries. Anticoagulant and antiplatelet therapy increase risk.
</p>

<h3><strong>Clinical Features</strong></h3>
<p>
  Symptoms may be insidious: headaches, progressive confusion, memory impairment, gait disturbance, 
  focal weakness, slurred speech, or fluctuating levels of consciousness. Because the onset can be slow, 
  family members or caregivers often notice subtle changes first.
</p>

<h3><strong>Diagnosis</strong></h3>
<p>
  Non-contrast CT scan is rapid and diagnostic showing a crescent-shaped extra-axial collection. MRI 
  can be useful for chronic or recurrent collections and to assess membrane formation. Clinical correlation 
  and medication review (anticoagulants) are important.
</p>

<h3><strong>Treatment Options</strong></h3>
<ul>
  <li><strong>Burr hole evacuation:</strong> Minimally invasive drainage under local or general anesthesia 
      is the most common treatment and typically provides rapid neurologic improvement.</li>
  <li><strong>Craniotomy:</strong> Reserved for thick, organized hematomas with membranes or recurrent collections.</li>
  <li><strong>Conservative management:</strong> Observation may be appropriate for small, asymptomatic 
      hematomas with careful monitoring and reversal of anticoagulation when necessary.</li>
</ul>

<h3><strong>Outcomes & Prevention</strong></h3>
<p>
  Most patients show significant recovery after evacuation; however, recurrence occurs in a minority and 
  requires vigilant follow-up. Falls prevention, careful use of antithrombotic medications, and early 
  evaluation after head injury help reduce risk and improve outcomes.
</p>

<p><em>
  Surgical drainage of CSDH often results in dramatic clinical improvement — early recognition is the key 
  to better recovery.
</em></p>
`,
  },
  {
    id: "tbi",
    title: "Traumatic Brain Injury (TBI)",
    image: ImgTBI,
    content: `<h3><strong>Introduction</strong></h3>
<p>
  Traumatic Brain Injury (TBI) results from an external mechanical force causing brain dysfunction. 
  It ranges from mild concussion to severe injury with intracranial hemorrhage, diffuse axonal injury, 
  and long-term disability. TBI is a leading cause of death and disability worldwide — prevention and 
  rapid, evidence-based care are essential to reduce its burden.
</p>

<h3><strong>Causes & Mechanisms</strong></h3>
<ul>
  <li>Road traffic collisions</li>
  <li>Falls (particularly in older adults and young children)</li>
  <li>Sports injuries</li>
  <li>Assaults and blast injuries</li>
</ul>

<h3><strong>Clinical Spectrum</strong></h3>
<p>
  Mild TBI (concussion) often manifests with brief loss of consciousness or transient confusion, 
  headaches, dizziness, and cognitive symptoms. Moderate to severe TBI may present with prolonged 
  unconsciousness, focal neurological deficits, seizures, or signs of raised intracranial pressure.
</p>

<h3><strong>Initial Assessment & Imaging</strong></h3>
<p>
  Early assessment follows ABCs (airway, breathing, circulation), with particular attention to rapid 
  neurologic evaluation using the Glasgow Coma Scale (GCS). Non-contrast CT is the first-line imaging 
  test to detect hemorrhage, contusion, skull fractures, and mass lesions requiring urgent surgery. 
  MRI provides greater detail for diffuse or delayed injury evaluation.
</p>

<h3><strong>Treatment Principles</strong></h3>
<ul>
  <li><strong>Emergency stabilization:</strong> Airway protection, hemodynamic support, and prompt neurosurgical evaluation.</li>
  <li><strong>Intracranial pressure management:</strong> Head elevation, hyperosmolar therapy (mannitol or hypertonic saline), 
      CSF drainage in selected cases, and decompressive craniectomy when medical therapy fails.</li>
  <li><strong>Surgical evacuation:</strong> For epidural, subdural hematomas or significant mass effect from contusion.</li>
  <li><strong>Rehabilitation:</strong> Early, tailored neurorehabilitation is crucial for maximizing recovery — including 
      physiotherapy, occupational therapy, cognitive rehabilitation, and psychological support.</li>
</ul>

<h3><strong>Sequelae & Long-term Care</strong></h3>
<p>
  TBI survivors may have persistent cognitive, behavioral, motor, and emotional difficulties. 
  Post-traumatic epilepsy, chronic headaches, mood disorders, and executive dysfunction are common 
  and require multidisciplinary long-term management. Return-to-work and psychosocial reintegration 
  are key goals of comprehensive rehabilitation programs.
</p>

<p><em>
  Prevention through helmets, seatbelts, safe environments, and awareness is the most effective strategy 
  to reduce TBI burden.
</em></p>
`,
  },
  {
    id: "functional",
    title: "Functional Neurosurgery",
    image: ImgFunctional,
    content: `<h3><strong>Definition & Scope</strong></h3>
<p>
  Functional neurosurgery focuses on restoring or modulating neurological function rather than 
  removing structural disease. It includes deep brain stimulation (DBS) for movement disorders, 
  epilepsy surgery, neuromodulation for chronic pain, and select stereotactic or ablative procedures 
  for refractory psychiatric disorders. The goal is symptom control and functional restoration when 
  medications are insufficient.
</p>

<h3><strong>Common Indications</strong></h3>
<ul>
  <li><strong>Parkinson’s disease:</strong> DBS targeting subthalamic nucleus or globus pallidus interna 
      to improve bradykinesia, rigidity, and tremor.</li>
  <li><strong>Essential tremor & dystonia:</strong> DBS is effective for disabling tremor and certain 
      forms of dystonia.</li>
  <li><strong>Epilepsy:</strong> Resection of epileptogenic zones when feasible, or vagus nerve stimulation 
      / responsive neurostimulation for multifocal epilepsy.</li>
  <li><strong>Chronic pain:</strong> Spinal cord stimulation and intrathecal drug delivery systems for 
      refractory pain syndromes.</li>
  <li><strong>Painful spasticity and movement disorders:</strong> Stereotactic procedures and neuromodulation 
      can reduce symptom burden.</li>
</ul>

<h3><strong>Technique & Technology</strong></h3>
<p>
  Procedures are guided by stereotactic planning, high-resolution imaging, and intraoperative neurophysiology 
  to precisely localize targets. Implantable pulse generators and programmable leads allow titration of 
  stimulation to optimize therapeutic benefit while minimizing side effects. Newer closed-loop and responsive 
  systems tailor stimulation to neural activity.
</p>

<h3><strong>Outcomes & Patient Selection</strong></h3>
<p>
  Success depends on careful patient selection, realistic expectations, and multidisciplinary follow-up. 
  For Parkinson’s disease and essential tremor, DBS frequently produces dramatic improvement in motor 
  symptoms and quality of life. Epilepsy surgery can be curative for selected patients with focal 
  epileptogenic lesions.
</p>

<h3><strong>Postoperative Care & Follow-up</strong></h3>
<p>
  Programming of neurostimulators, medication adjustment, and rehabilitation are essential post-surgical steps. 
  Long-term monitoring ensures device function and addresses complications such as infection, lead migration, 
  or hardware malfunction.
</p>

<p><em>
  Functional neurosurgery offers life-changing therapies for carefully selected patients. Evaluate with an 
  experienced multidisciplinary team to determine suitability and expected outcomes.
</em></p>
`,
  },
];

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BreadCumb from "../components/BreadCumb"; // adjust path

// Shorts list
const shortsVideos = [
  "https://www.youtube.com/embed/-nOLqRZLJCA?si=kwWXoJ8tGo7Gm24c",
  "https://www.youtube.com/embed/Hl4n09fYu78?si=OLU4MYRKLvUfc1HV",
  "https://www.youtube.com/embed/ZJwE5BvPRfE?si=UmIXJhUJORJMa9Yz",
  "https://www.youtube.com/embed/6VJo3CgOpfk?si=ZjS-YrX2uFL99PqE",
  "https://www.youtube.com/embed/vNINyNnYAHo?si=duK6l1suCONSwNei",
  "https://www.youtube.com/embed/-nOLqRZLJCA?si=o43P6YKyxC3kP9Q1",
  "https://www.youtube.com/embed/TuHN5sq68YI?si=BrqIhM6G_M4TyFXG",
  "https://www.youtube.com/embed/XwARUloBotE?si=eaUQxRFLs1Wpus1S",
];

export default function BrainPage() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Shorts slideshow state
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % shortsVideos.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-white min-h-screen">
      {/* Breadcrumb */}
      <BreadCumb
        title="Brain Surgery"
        items={[
          { label: "Home", link: "/" },
          { label: "Our Specialities " },
          { label: "Brain Surgery" },
        ]}
      />
      <BrainSurgery/>

        <div className="container mx-auto px-4">
         {/* Header */}
         <div className="text-center">
           <h2 className="text-3xl font-bold text-primary">
             Common Spinal Diseases and Anomalies
           </h2>
           <p className="mt-2 text-lg text-gray-600">
             Comprehensive treatment for spine disorders.
           </p>
         </div>
       
         <div className="flex flex-col md:flex-row gap-6 mt-6">
           {/* Sidebar Column */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
         {/* Toggle button for mobile with tooltip */}
         <div className="flex justify-end md:hidden mb-2 relative group">
           <button
             className="p-2 rounded bg-slate-100 hover:bg-slate-200"
             onClick={() => setSidebarOpen(!sidebarOpen)}
             aria-label="Toggle Topics"
           >
             {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
           </button>
       
           {/* Tooltip */}
           <span className="absolute top-0 right-full mr-2 w-56 bg-gray-800 text-white text-xs rounded px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
             Press this to read more about spine-related diseases
           </span>
         </div>
       
         {/* Topics Aside */}
         <aside
           className={`bg-slate-100 rounded-lg shadow md:sticky md:top-24 md:self-start transition-all ${
             sidebarOpen ? "block" : "hidden md:block"
           }`}
         >
           <div className="p-6">
             <ul className="space-y-2">
               {topics.map((topic) => (
                 <li
                   key={topic.id}
                   onClick={() => {
                     setActiveTopic(topic);
                     setSidebarOpen(false); // hide on mobile after click
                     mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
                   }}
                   className={`flex items-center justify-between cursor-pointer px-4 py-3 rounded-lg border transition-colors ${
                     activeTopic.id === topic.id
                       ? "bg-primary text-white border-blue-600 shadow"
                       : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                   }`}
                 >
                   <span className="text-sm font-medium">{topic.title}</span>
                   <ChevronRight
                     className={`w-4 h-4 ${
                       activeTopic.id === topic.id ? "text-white" : "text-slate-400"
                     }`}
                   />
                 </li>
               ))}
             </ul>
           </div>
         </aside>
       
         {/* Second Aside (Desktop only) */}
         <aside className="hidden md:block bg-[#285f91] text-white rounded-lg shadow p-10 text-center">
           <h4 className="text-sm font-semibold uppercase mb-2">Need Emergency?</h4>
           <h2 className="text-xl font-bold mb-3 leading-snug">
             Looking For The Best <br /> Medical Solutions?
           </h2>
           <p className="text-sm opacity-90 mb-4">
             Get reliable healthcare support from our expert team of doctors and staff.
           </p>
           <Link
             to="/contact"
             className="mt-2 inline-block rounded-xl bg-white px-6 py-3 text-primary font-semibold shadow-lg hover:bg-gray-100 transition duration-300 text-base md:text-lg"
           >
             Contact With Us
           </Link>
         </aside>
       
         {/* Third Aside - Shorts (Desktop only) */}
         <aside className="hidden md:block bg-slate-100 rounded-lg shadow-lg p-3">
           <h3 className="text-lg font-bold text-gray-700 text-center mb-2">Our Latest Shorts</h3>
           <div
             className="relative w-full overflow-hidden rounded-xl shadow-md"
             style={{ paddingTop: "177.78%" }}
           >
             <iframe
               src={shortsVideos[current]}
               title="YouTube Shorts"
               frameBorder="0"
               style={{ border: "none" }}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="absolute top-0 left-0 w-full h-full"
             />
           </div>
         </aside>
       </div>
       
           {/* Main Content */}
           <main className="flex-1 bg-white rounded-lg shadow p-6">
             <div className="mb-4">
               <img
                 src={activeTopic.image}
                 alt={activeTopic.title}
                 className="w-full h-80 object-cover rounded-lg shadow-sm mb-4"
               />
               <div className="flex items-center justify-center">
                 <h2 className="text-4xl font-bold text-primary">{activeTopic.title}</h2>
               </div>
             </div>
       
             <article
               className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-2"
               dangerouslySetInnerHTML={{ __html: activeTopic.content }}
             />
           </main>
         </div>
       </div>
       
    </section>
  );
}
