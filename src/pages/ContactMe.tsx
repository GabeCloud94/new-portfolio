import ProfilePic from '../assets/profile-pic.jpg'

export default function ContactMe () {
    return (
        <div className="contact-page animate-fade-in p-10 bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex items-center justify-center w-full">
          <div className="max-w-md mx-auto p-6 bg-violet-400 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-center">Contact Me</h1>
            <div className="text-center mb-4">
              <img
                src={ ProfilePic } // Replace with the path to your image
                alt="Your Name"
                className="w-40 h-40 mx-auto rounded-full"
              />
            </div>
            <p className="mb-4 text-center">
              Feel free to reach out to me via email at{' '}
              <a
                href="mailto:gabecloud94@gmail.com"
                className="text-yellow hover:text-slate-900 transition-colors duration-300 hover: font-semibold"
              >
                gabecloud94@gmail.com
              </a>.
            </p>
          </div>
        </div>
      );
  }