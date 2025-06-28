import { Mail, Users, Target, Award, Heart, Zap, Shield, Globe } from 'lucide-react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className="w-full" style={{ flex: 1 }}>
        {/* Hero Section */}
        <section className="mx-10 my-12 space-y-4 lg:my-24 lg:space-y-12">
          <div className="space-y-8 lg:flex lg:items-center lg:justify-between lg:space-y-0 lg:gap-12">
            <h1 className="text-6xl lg:text-[8rem] font-dm-sans font-medium">About Us</h1>
            <h2 className="text-lg lg:text-3xl font-lato max-w-2xl lg:max-w-xl lg:ml-8">
              Professional bookkeeping services with over a decade of experience in financial management and accounting excellence.
            </h2>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium">Our Story</h3>
                <p className="text-lg lg:text-xl font-lato text-gray-700 leading-relaxed">
                  The founder started her bookkeeping work in 2011 under a multinational private company. She worked in the said company for almost ten (10) years as an Accountant for a specific business unit and was later promoted to Finance Manager for two (2) years.
                </p>
                <p className="text-lg lg:text-xl font-lato text-gray-700 leading-relaxed">
                  During this time, she enhanced her knowledge and skills in financial and accounting aspects. She also took accounting courses and completed her Master's Degree in Business Administration.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 lg:p-12 rounded-3xl">
                <Target className="w-16 h-16 text-yellow-600 mb-6" />
                <h4 className="text-2xl font-dm-sans font-medium mb-4">Established in 2019</h4>
                <p className="text-gray-700 font-lato">
                  With almost ten years of experience and educational attainment, she decided to establish MNC Bookkeeping Services PH in August 2019.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="text-center space-y-6">
                <h3 className="text-3xl lg:text-4xl font-dm-sans font-medium">Our Office</h3>
                <p className="text-lg lg:text-xl font-lato text-gray-700">
                  No. 56 JB Santos Street, Wawa Tangos, Navotas City, Philippines 1485
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium text-center mb-16">Our Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-dm-sans font-medium">Trust</h4>
                <p className="text-gray-600 font-lato">Building strong relationships through referrals and consistent, reliable service delivery.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-dm-sans font-medium">Excellence</h4>
                <p className="text-gray-600 font-lato">Upholding the highest standards in providing comprehensive accounting and consulting services.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-dm-sans font-medium">Protection</h4>
                <p className="text-gray-600 font-lato">Protecting our clients' interests through professional expertise and attention to detail.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-dm-sans font-medium">Flexibility</h4>
                <p className="text-gray-600 font-lato">Applying an individualized approach to each client's unique business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium mb-6">Our Approach</h3>
              <p className="text-lg lg:text-xl font-lato text-gray-700 max-w-3xl mx-auto">
                With the technological expertise of the younger generation, combined with the knowledge of our professionally educated and experienced accountants and auditors, we have developed and improved our working methods and internal procedures.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-yellow-600" />
                </div>
                <h4 className="text-xl font-dm-sans font-medium mb-2">Experienced Team</h4>
                <p className="text-gray-600 font-lato mb-4">
                  Our founder brings over 10 years of experience in multinational companies, including roles as Accountant and Finance Manager.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">10+ Years</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">MBA</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">CPA</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-10 h-10 text-yellow-600" />
                </div>
                <h4 className="text-xl font-dm-sans font-medium mb-2">Professional Services</h4>
                <p className="text-gray-600 font-lato mb-4">
                  Comprehensive accounting and consulting services that protect our clients' interests and optimize their financial operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Bookkeeping</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Tax</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Consulting</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-yellow-600" />
                </div>
                <h4 className="text-xl font-dm-sans font-medium mb-2">Client Focus</h4>
                <p className="text-gray-600 font-lato mb-4">
                  We demonstrate flexibility and apply an individualized approach to each client, optimizing efficiency according to their business nature.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Flexible</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Tailored</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Efficient</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-white mb-2">10+</div>
                  <div className="text-white font-lato">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-white mb-2">2019</div>
                  <div className="text-white font-lato">Company Founded</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-white mb-2">100%</div>
                  <div className="text-white font-lato">Referral Based</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-white mb-2">MBA</div>
                  <div className="text-white font-lato">Educational Background</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium mb-6">Ready to Work Together?</h3>
            <p className="text-lg lg:text-xl font-lato text-gray-700 mb-8">
              Let's discuss how we can help optimize your accounting, finances, and tax obligations according to the nature of your business.
            </p>
            <button
              className="px-8 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black rounded-2xl flex items-center gap-3 text-lg font-bold shadow-lg hover:from-yellow-400 hover:to-yellow-600 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 mx-auto"
              onClick={() => {
                const scrollToFooterForm = () => {
                  const form = (window as Window & { footerEmailForm?: HTMLFormElement | null }).footerEmailForm;
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                    const emailInput = form.querySelector('input[type="email"]');
                    if (emailInput instanceof HTMLInputElement) {
                      emailInput.focus();
                    }
                    return true;
                  }
                  return false;
                };
                if (!scrollToFooterForm()) {
                  let elapsed = 0;
                  const interval = setInterval(() => {
                    elapsed += 100;
                    if (scrollToFooterForm() || elapsed >= 1000) {
                      clearInterval(interval);
                    }
                  }, 100);
                }
              }}
            >
              <Mail size={24} />
              Get In Touch
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;