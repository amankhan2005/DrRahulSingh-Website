import { Mail, Phone, Award, Briefcase, FileText, User, MapPin, BookOpen, Calendar, Download, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import drRahulImg from "../assets/home/dr-rahul.webp";  

 import BreadCumb from "../components/BreadCumb";

export default function RahulSinghPage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-slate-50"  >

            <BreadCumb
        title="About Dr. Rahul Singh"
        items={[
          { label: "Home", link: "/" },
          { label: "About Us" },
        ]}
      />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Profile Image Section */}
    <div className="lg:w-1/3 p-8 flex items-center justify-center relative overflow-hidden">
      
      {/* Full Image */}
      <img 
        src={drRahulImg} 
        alt="Dr Rahul" 
        className="w-full h-full object-cover rounded-2xl shadow-2xl"
      />

        {/* Bottom Tag */}
        
      </div>
    
            
            {/* Profile Info Section */}
            <div className="lg:w-2/3 lg:p-8 p-4 ">
              <div className="flex items-center mb-4">
                <h1 className="lg:text-4xl text-2xl font-bold text-gray-900 mr-3">Dr. Rahul Singh</h1>
     
              </div>
              
              <div className="mb-6">
                <p className="text-xl text-gray-700 font-medium mb-2">
                  MBBS, MS Surgery, MCh Neurosurgery
                </p>
                <p className="text-lg font-medium" style={{color: '#3b628b'}}>
                  Fellowship Neuroendoscopy (Brain & Spine)
                </p>
              </div>
              
              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <a href="mailto:info@drrahulneurosurgeon.com" className="flex items-center py-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-colors" style={{backgroundColor: 'rgba(59, 98, 139, 0.15)'}}>
                    <Mail size={18} style={{color: '#3b628b'}} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">drrahulsingh303@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+918400136465" className="flex items-center py-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-colors" style={{backgroundColor: 'rgba(59, 98, 139, 0.15)'}}>
                    <Phone size={18} style={{color: '#3b628b'}} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">+91-8400136465</p>
                  </div>
                </a>
                
                <div className="flex items-center py-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: 'rgba(59, 98, 139, 0.15)'}}>
                    <MapPin size={18} style={{color: '#3b628b'}} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">Lucknow, Uttar Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: 'rgba(59, 98, 139, 0.15)'}}>
                    <Calendar size={18} style={{color: '#3b628b'}} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium text-gray-900">4+ Years</p>
                  </div>
                </div>
              </div>
              
              {/* Specialties */}
              {/* <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 mb-3">SPECIALTIES</p>
                <div className="flex flex-wrap gap-2">
                  {["Brain Surgery", "Spine Surgery", "Peripheral Nerve", "Neurosurgery", "Neuroendoscopy", "Neurotrauma"].map((specialty, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{backgroundColor: '#3b628b'}}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div> */}
              
              {/* Action Buttons */}
              {/* <div className="flex flex-wrap gap-3">
                <button className="text-white px-6 py-3 rounded-xl flex items-center transition-all shadow-lg hover:shadow-xl" style={{backgroundColor: '#3b628b', ':hover': {backgroundColor: '#13335b'}}}>
                  <Phone size={18} className="mr-2" />
                  Contact Now
                </button>
                <button className="bg-white text-white px-6 py-3 rounded-xl flex items-center transition-all shadow-md hover:bg-blue-50" style={{border: `2px solid #3b628b`, color: '#3b628b'}}>
                  <Download size={18} className="mr-2" />
                  Download Profile
                </button>
              </div> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="lg:p-8 p-4">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'rgba(59, 98, 139, 0.15)'}}>
                <User size={24} style={{color: '#3b628b'}} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">About Dr. Rahul Singh</h2>
            </div>
            
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                Dr Rahul Singh is an experienced neurosurgeon in Lucknow in the specialties of brain, spine and peripheral nerve surgeries. He did his MCh Neurosurgery from prestigious Institute of Medical Sciences – Banaras Hindu University, Varanasi, Uttar Pradesh; MS General Surgery with Gold Medal from King Georges' Medical University, Lucknow, Uttar Pradesh & MBBS from Guwahati Medical College, Guwahati, Assam.
              </p>
              
              <p>
                He is a member of prestigious American Association of Neurological Surgeon, Member of Neuroendoscopy Society of India and Neurological Surgeons' Society of India.
              </p>
              
              <div className="p-6 rounded-xl border-l-4" style={{background: 'linear-gradient(to right, rgba(59, 98, 139, 0.1), rgba(19, 51, 91, 0.05))', borderColor: '#3b628b'}}>
                <h3 className="font-bold text-xl mb-4 flex items-center" style={{color: '#13335b'}}>
                  <Award size={20} className="mr-2" />
                  Areas of Interest
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Minimally Invasive Brain and Spine Surgery",
                    "Endoscopic Skull base Surgery", 
                    "Endovascular Neuro Surgery",
                    "Complex Brain Tumor and Neurovascular Surgery",
                    "Peripheral nerve surgery",
                    "Pediatric Neurosurgery",
                    "Neurotrauma & Neuro-oncology"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#3b628b'}}></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p>
                He has published more than 19 international papers indexed in PubMed, DOAJ, SCOPUS, Science Citation index etc and researched in every subspecialty of Neurosurgery. He had worked as a senior resident in King Georges' Medical University, IMS- BHU, Varanasi & HIMS, Lucknow; as ADMO in LNM Railway Hospital, Gorakhpur, Uttar Pradesh.
              </p>
              
              <p>
                He is proficient in managing complex brain and spine trauma cases. He has managed successfully many cases of intractable headache, back pain and epilepsy.
              </p>
              
              <p>
                He is involved in many outreach community programs to spread knowledge about good health related to brain and spine.
              </p>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="lg:p-8 p-4">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <Award size={24} className="text-amber-600" />
              </div>
              <h2 className="lg:text-3xl text-xl font-bold text-gray-900">Qualifications & Memberships</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Educational Qualifications */}
              <div className="lg:p-6 p-2 rounded-xl border" style={{background: 'linear-gradient(to bottom right, rgba(59, 98, 139, 0.1), rgba(19, 51, 91, 0.05))', borderColor: 'rgba(59, 98, 139, 0.3)'}}>
                <h3 className="font-bold text-xl mb-4 flex items-center" style={{color: '#13335b'}}>
                  <BookOpen size={20} className="mr-2" />
                  Educational Qualifications
                </h3>
                <div className="space-y-4">
                  {[
                    { degree: "MBBS", institution: "Guwahati Medical College, Guwahati, Assam" },
                    { degree: "MS Surgery (Gold Medal)", institution: "King Georges' Medical University, Lucknow, UP" },
                    { degree: "MCh Neurosurgery", institution: "Institute of Medical Sciences, BHU, Varanasi, UP" },
                    { degree: "Fellowship Neuroendoscopy", institution: "Brain & Spine Surgery" }
                  ].map((qual, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-3 h-3 rounded-full mr-3 mt-1" style={{backgroundColor: '#3b628b'}}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{qual.degree}</h4>
                        <p className="text-gray-600 text-sm">{qual.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Memberships */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 lg:p-6 p-2 rounded-xl border border-amber-200">
                <h3 className="font-bold text-xl text-amber-800 mb-4 flex items-center">
                  <Award size={20} className="mr-2" />
                  Professional Memberships
                </h3>
                <div className="space-y-4">
                  {[
                    "American Association of Neurological Surgeon",
                    "Neuroendoscopy Society of India", 
                    "Neurological Surgeons' Society of India",
                    "Associate Member International Headache Society",
                    "Certificate Course in Ventricular Endoscopy",
                    "Endoscopic Skull Base Surgery Course"
                  ].map((membership, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-3 mt-1"></div>
                      <span className="text-gray-700">{membership}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="lg:p-8 p-4">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Briefcase size={24} className="text-green-600" />
              </div>
              <h2 className="lg:text-3xl text-xl font-bold text-gray-900">Professional Experience</h2>
            </div>
            
            <div className="lg:p-8 p-2 rounded-xl text-white text-center mb-8" style={{background: 'linear-gradient(to right, #3b628b, #13335b)'}}>
              <p className="lg:text-5xl text-2xl md:text-3xl font-bold mb-2">4+</p>
              <p className="text-xl">Years of Professional Experience</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{backgroundColor: 'rgba(59, 98, 139, 0.3)'}}></div>
              
              {[
                { position: "Senior Resident", institution: "King Georges' Medical University, Lucknow", period: "Recent" },
                { position: "Senior Resident", institution: "Institute of Medical Sciences, BHU, Varanasi", period: "Previous" },
                { position: "Senior Resident", institution: "HIMS, Lucknow", period: "Previous" },
                { position: "ADMO", institution: "LNM Railway Hospital, Gorakhpur, Uttar Pradesh", period: "Previous" }
              ].map((exp, index) => (
                <div key={index} className="relative flex items-center mb-8 last:mb-0">
                  <div className="absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg" style={{backgroundColor: '#3b628b'}}></div>
                  <div className="ml-16 bg-gray-50 p-6 rounded-xl flex-1 hover:bg-blue-50 transition-colors">
                    <h3 className="font-bold text-lg text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600 mb-1">{exp.institution}</p>
                    <span className="text-sm font-medium" style={{color: '#3b628b'}}>{exp.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Publications Section */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="lg:p-8 p-4" >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'rgba(59, 98, 139, 0.15)'}}>
                <FileText size={24} style={{color: '#3b628b'}} />
              </div>
              <h2 className="lg:text-3xl text-xl md:text-2xl font-bold text-gray-900">Research & Publications</h2>
            </div>
            
            <div className="lg:p-8 p-4 rounded-xl text-white text-center mb-8" style={{background: 'linear-gradient(to right, #13335b, #3b628b)'}}>
              <p className="lg:text-5xl text-2xl md:text-3xl font-bold mb-2">19+</p>
              <p className="text-xl mb-2">Published International Papers</p>
              <p className="opacity-80">(PubMed, DOAJ, SCOPUS, Science Citation Index)</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Featured Publications</h3>
              
              {[
                "Giant Acute Extradural Hematoma following Titanium Mesh Cranioplasty",
                "A Prospective Study and Analysis of Ventriculoperitoneal Shunt Surgery: Their Indication and Complication in a Single Tertiary Care Center",
                "Evaluation of Cerebellopontine Angle Epidermoid Presenting with Cranial Nerve Deficit: A Surgical Perspective",
                "Traumatic Cerebellar Hematoma: A Tertiary Care Experience of 23 Conservatively Managed Cases",
                "Clinical and Outcome Analysis in Head Injury Patients with Fahr's Disease",
                "Evaluation of Pediatric Hydrocephalus: Clinical, Surgical, and Outcome Perspective in a Tertiary Center"
              ].map((publication, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 transition-all" style={{'&:hover': {borderColor: 'rgba(59, 98, 139, 0.4)', background: 'rgba(59, 98, 139, 0.05)'}}}>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{backgroundColor: '#3b628b'}}></div>
                    <h4 className="font-medium text-gray-800 leading-relaxed">{publication}</h4>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 lg:p-6 p-4 rounded-xl border border-gray-200" style={{background: 'linear-gradient(to right, rgba(59, 98, 139, 0.05), rgba(19, 51, 91, 0.03))'}}>
                <h4 className="font-bold text-gray-800 mb-3">Additional Research Areas:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Analysis Of Clinical Presentation And Management Outcome Of Operated Traumatic Acute Extradural Hematoma",
                    "Clinical, surgical and postoperative outcome analysis of tumors occupying both posterior and middle cranial fossa",
                    "Impact of COVID-19 Pandemic on Neurosurgical Practice in a Tertiary Care Center in India",
                    "And many more research publications..."
                  ].map((research, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full mr-2 mt-2" style={{backgroundColor: 'rgba(59, 98, 139, 0.7)'}}></div>
                      <span className="text-gray-700 text-sm">{research}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}