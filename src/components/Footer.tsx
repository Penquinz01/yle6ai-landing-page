export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">YEL6AI</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
            <a href="tel:+919497062393" className="hover:text-white transition-colors">
              +91 9497062393
            </a>
            <a href="mailto:zayansiddique@yel6ai.com" className="hover:text-white transition-colors">
              zayansiddique@yel6ai.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>YEL6AI - Developed by Saud EK</p>
        </div>
      </div>
    </footer>
  );
}
