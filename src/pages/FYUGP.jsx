import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp } from "react-icons/fa";
import ChatBot from "../components/ChatBot";
import Footer from "../components/Footer";
import CareerContent from "../components/CareerContent";
gsap.registerPlugin(ScrollTrigger);

export default function FYUGP() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  return (
    <div>
      <div className="overflow-x-hidden">
        <Header isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen((prev) => !prev)} setMenuOpen={setMenuOpen} />
        
        <div className="relative bg-gradient-to-r from-blue-950 to-indigo-950 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center">
              <h2 className="sm:text-8xl text-4xl md:text-5xl font-bold text-white mb-3">FYUGP Programme</h2>
              <p className="text-gray-300 text-center mt-2">Four Year Under Graduate Programme</p>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">

                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    FYUGP സവിശേഷതകൾ
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">അഫിലിയേറ്റഡ് കോളേജുകളിൽ 63 മേജേർ പ്രോഗ്രാമുകളിൽ വൈവിധ്യമാർന്ന ഇരുന്നൂറിൽപരം മൈനർ കോഴ്‌സുകളും സ്പെഷ്യലൈസേഷനുകളും.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">ഇംഗ്ലീഷ്, സംസ്‌കൃതം, മലയാളം, ഹിന്ദി, തമിഴ്, അറബിക്, ഫ്രഞ്ച്, ലാറ്റിൻ, ജർമ്മൻ, റഷ്യൻ, ഹീബ്രൂ & സിറിയക് എന്നീ ഭാഷകളിൽ എ. ഇ. സി കോഴ്‌സുകൾ.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">12 ഇന്റർ ഡിസിപ്ലിനറി മേജേർ കോഴ്‌സുകൾ.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">വിദ്യാർഥികൾ കോളേജ് തിരഞ്ഞെടുക്കും മുൻപ് കോളേജ് ബാസ്കറ്റ് പരിശോധിച്ച് എട്ട് സെമസ്റ്ററുകളുടെയും വൈവിധ്യം മനസിലാക്കി അഡ്മിഷൻ എടുക്കുന്നതിനുള്ള അവസരം.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">വിദ്യാർഥികൾക്ക് അവരുടെ അഭിരുചിക്ക് അനുസരിച്ച് മൈനർ വിഷയങ്ങൾ ഓൺലൈൻ പോർട്ടൽ വഴി തിരഞ്ഞെടുക്കാം.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">ഫാസ്റ് ട്രാക്ക് സംവിധാനം ഉപയോഗിച്ച് വിദ്യാർഥികൾക്ക് 5 സെമസ്റ്റർ (2.5 വർഷം) കൊണ്ട് ഡിഗ്രിയും 7 സെമസ്റ്റർ (3.5 വർഷം) കൊണ്ട് ഓണേഴ്സ് ബിരുദവും നേടാവുന്നതാണ്.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">ഓണേഴ്സ് ബിരുദം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർഥിക്ക് കേവലം ഒരു വർഷം കൊണ്ട് ബിരുദാനന്തര ബിരുദം കരസ്ഥമാക്കാവുന്നതാണ്.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">ഓണേഴ്‌സ് വിത്ത് റിസേർച്ച് ബിരുദം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർഥിക്ക് ബിരുദാനന്തര ബിരുദം ഇല്ലാതെ(UGC മാനദണ്ഡങ്ങൾക്ക് വിധേയമായി ) തന്നെ ഗവേഷണ പഠനത്തിനും നെറ്റ് പരീക്ഷക്കും യോഗ്യത ഉണ്ടായിരിക്കുന്നതാണ്.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">ഒരേ വിഷയത്തിൽ ഓരോ കോളേജുകളിലും വൈവിധ്യമാർന്ന കോഴ്‌സുകൾ / ഇലക്റ്റിവുകൾ.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">എല്ലാ ബിരുദ പ്രോഗ്രാമുകൾക്കുമൊപ്പം വാല്യൂ ആഡഡ് കോഴ്‌സുകളും സ്‌കിൽ ഡവലപ്മെന്റ് കോഴ്‌സുകളും പഠിക്കുന്നതിനുള്ള അവസരം.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">ആദ്യ രണ്ട് സെമസ്റ്ററുകൾക്ക് ശേഷം വിദ്യാർഥികൾക്ക് അഡ്മിഷൻ ലഭിച്ച മേജർ/മൈനർ മാറാൻ ഉള്ള അവസരം.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">സ്റ്റുഡൻറ് മൊബിലിറ്റി: വിദ്യാർഥികൾക്ക് കോളേജ്/സർവകലാശാല തലത്തിൽ മാറി പഠനം തുടരാനുള്ള അവസരം.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">അക്കാഡമിക് തൊഴിൽ നൈപുണ്യം വികസിപ്പിക്കാൻ 'സമ്മർ ഇന്റേൺഷിപ്പ് '.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">ഹൈബ്രിഡ് മോഡിൽ പഠനം നടത്താൻ ഓരോ വിദ്യാർഥിക്കും അവസരം.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">കാര്യക്ഷമമായ പരീക്ഷ സമ്പ്രദായം.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    ഒന്നാം വർഷ ബിരുദ പ്രവേശനം - 2025
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>കേരള സർവ്വകലാശാലയുടെ വിവിധ പഠന വകുപ്പുകളിലേയും, അഫിലിയേറ്റഡ് (ഗവൺമെന്‍റ്/എയ്ഡഡ്/ സ്വാശ്രയ/ യു.ഐ.റ്റി./ ഐ.എച്ച്.ആർ.ഡി.) കോളേജുകളിലേയും 2025-26 അധ്യയന വർഷത്തിലെ നാലു വർഷ ബിരുദ കോഴ്സുകളുടെ ഏകജാലക സംവിധാനം വഴിയുള്ള പ്രവേശനത്തിന് അപേക്ഷ ക്ഷണിച്ചു.</p>

                    <p>നാലു വർഷ ബിരുദ പ്രോഗ്രാമുകളിൽ പ്രവേശനം നേടുന്ന വിദ്യാർഥികൾക്ക് പ്രസ്തുത പ്രോഗ്രാം പൂർത്തിയാക്കുവാൻ 3 ഓപ്ഷനുകൾ ലഭ്യമാണ്.</p>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <ol className="list-decimal ml-5 space-y-2">
                        <li>മൂന്ന് വർഷ ബിരുദം (3-year UG Degree) : പ്രവേശനം നേടി മൂന്നാം വർഷം കോഴ്‌സ് പൂർത്തിയാക്കാൻ ആഗ്രഹിക്കുന്ന വിദ്യാർഥിക്ക് എക്സിറ്റ് ഓപ്ഷൻ ഉപയോഗപ്പെടുത്തി പഠനം നിർത്താവുന്നതാണ്. പ്രസ്തുത വിദ്യാർഥിക്ക് തന്‍റെ മേജർ വിഷയങ്ങളുടെ അടിസ്ഥാനത്തിൽ (വിജയകരമായി പൂർത്തിയാക്കുന്നവർക്ക്) 3 വർഷ ബിരുദം (3-year UG Degree) ലഭിക്കുന്നതാണ്. ഇവർ ബിരുദാന്തര ബിരുദം നേടാൻ ആഗ്രഹിക്കുന്നപക്ഷം തുടർന്ന് 2 വർഷം പഠിക്കേണ്ടതാണ്.</li>
                        <li>നാലു വർഷ ബിരുദം (ഓണേഴ്സ്) : (4-year UG Degree (Honors): നാലു വർഷം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർഥികൾക്ക് ഓണേഴ്സ് ബിരുദം ലഭിക്കുന്നതാണ്.</li>
                        <li>നാലു വർഷ ബിരുദം (ഓണേഴ്‌സ് വിത്ത് റിസേർച്ച്): ഗവേഷണ മേഖലയിൽ താല്പര്യമുള്ള വിദ്യാർഥികൾക്ക് 4-year UG Degree (Honors with Research) തിരഞ്ഞെടുക്കാവുന്നതാണ്. വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർഥികൾക്ക് ഓണേഴ്സ് വിത്ത് റിസർച്ച് ഡിഗ്രി ലഭിക്കുന്നതാണ്.</li>
                      </ol>
                    </div>

                    <p>കേരള സർവ്വകലാശാലയുടെ കീഴിൽ പ്രവേശനം ആഗ്രഹിക്കുന്ന എല്ലാ വിദ്യാർത്ഥികളും (General/Reservation/Management/Sports quota/ PWD/ Transgender/ TLM/ Lekshadweep ഉൾപ്പെടെ) ഏകജാലക സംവിധാനം വഴി അപേക്ഷ സമർപ്പിക്കേണ്ടതാണ്.</p>

                    <p>ഓൺലൈൻ രജിസ്ട്രേഷന്റെ അവസാന തീയതി വരെ അപേക്ഷയിലെ തെറ്റുകൾ തിരുത്താവുന്നതാണ്.</p>

                    <p>വിദ്യാർത്ഥികൾക്ക് 20 ഓപ്ഷൻ വരെ സെലക്ട് ചെയ്യാവുന്നതാണ്. കോളേജുകളെ സംബന്ധിക്കുന്ന വിരങ്ങൾ അതാത് കോളേജുകളുടെ വെബ് സൈറ്റിൽ ലഭ്യമാണ്. അത് പരിശോധിച്ചതിനുശേഷം മാത്രം കോളേജുകൾ തെരഞ്ഞെടുക്കേണ്ടതാണ്. ഓപ്ഷൻ കൊടുത്ത കോളേജുകളിലേക്ക് അലോട്ട്മെൻറ് ലഭിക്കുകയാണെങ്കിൽ നിർബന്ധമായും പ്രവേശനം നേടേണ്ടതാണ്. അല്ലാത്തപക്ഷം തുടർന്നു വരുന്ന അലോട്ട്‌മെൻറിൽ പരിഗണിക്കുന്നതല്ല. പ്രവേശനം ആഗ്രഹിക്കുന്ന കോളേജുകളും പ്രോഗ്രാമുകളും മാത്രം മുൻഗണന ക്രമത്തിൽ തെരഞ്ഞെടുക്കാൻ പ്രത്യേകം ശ്രദ്ധിക്കേണ്ടതാണ്.</p>

                    <p>ഓൺലൈൻ രജിസ്ട്രേഷൻ ചെയ്തതിനുശേഷം അപേക്ഷയുടെ പ്രിൻറൗട്ട് കോളേജുകളിലേക്കോ സർവ്വകലാശാലയിലേക്കോ അയക്കേണ്ടതില്ല. അപേക്ഷയുടെ പ്രിൻറൗട്ടും ഫീസടച്ചതിൻറെ രസീതും പ്രവേശന സമയത്ത് അതാത് കോളേജുകളിൽ ഹാജരാക്കേണ്ടതാണ്. ഓൺലൈൻ രജിസ്ട്രേഷൻ ഫീസ് 900/- (SC/ST വിഭാഗത്തിന് 500/- ) രൂപയാണ്.</p>

                    <p>ഏകജാലക സംവിധാനത്തിലുള്ള എല്ലാ ഫീസുകളും ഓൺലൈൻ മുഖാന്തിരം അടക്കേണ്ടതാണ്. ഡി.ഡി, ചെക്ക്, മറ്റു ചെലാനുകൾ തുടങ്ങിയവ മുഖേനെയുള്ള പേയ്‌മെന്റുകൾ സ്വീകരിക്കുകയോ റീഫണ്ട് ചെയ്യുകയോ ചെയ്യുന്നതല്ല. ഫീസ് അടച്ച രസീത് നിർബന്ധമായും സൂക്ഷിക്കേണ്ടതാണ്. തെറ്റായി ഒടുക്കുന്ന ഫീസുകൾ റീഫണ്ട് ചെയ്യപ്പെടുന്നതല്ല.</p>

                    <p>അഡ്മിഷൻ സംബന്ധിച്ചുള്ള അതാതു സമയങ്ങളിലെ വിവരങ്ങൾക്ക് സർവകലാശാല പത്രകുറിപ്പുകളും അഡ്മിഷൻ വെബ്സൈറ്റും <a href="https://admissions.keralauniversity.ac.in/" className="text-blue-600 underline hover:text-blue-800">admissions.keralauniversity.ac.in</a> ശ്രദ്ധിക്കേണ്ടതാണ്.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    About FYUGP
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Four Year Under Graduate Programme (FYUGP) is a modern-day revolution in the higher education sector, which offers Kerala University students a variety of options when selecting their major programmes, thereby providing immense opportunities for academic prowess and professional advancement.</p>

                    <div className="space-y-2">
                      <p><strong>Degree in 2 Years 6 Months</strong></p>
                      <p>BA / BSc / BCom Degree in 3 years / 2 Years 6 Months</p>
                      <p>BA (Hons) / B.Sc. (Hons) / BCom (Hons) in 3 Years 6 Months / 4 Years</p>
                      <p>BA (Research) BSc (Research) BCom (Research) in 3 Years 6 months / 4 Years</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Fast Track Results
                    </h2>
                    <p className="text-gray-700">A comprehensive overhaul in the examination process includes a 30-day result publishing timeline and the establishment of a robust examination system that ensures exams are conducted using a question bank.</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Variety of Courses
                    </h2>
                    <p className="text-gray-700">The students have the liberty to pursue studies across various disciplines through hybrid mode.
                        In addition to acquiring deep knowledge in their major subjects, students are also afforded the opportunity to select minor courses according to their interests. Furthermore if needed, at the start of the second year, students have the flexibility to change their major and minor courses.
                        There is a tremendous opportunity for pursuing higher studies in the major and minor disciplines.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Internships
                    </h2>
                    <p className="text-gray-700">Summer internships are also provided to enhance opportunities in both academic and professional domains.Students have the option to pursue an Honours Degree or engage in research studies (including project) during the fourth year. Additionally, a six-month long internship is available, which significantly enhances the likelihood of securing a suitable job.</p>
                  </div>
                </div>

            </div>
        </div>

        <ChatBot/>
        <Footer/>
      </div>
      <a
            href="https://wa.me/919946667727"
            target="_blank"
            className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
          >
            <FaWhatsapp size={30} />
          </a>
    </div>
  );
}
