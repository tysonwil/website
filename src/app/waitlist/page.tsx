import Image from 'next/image';

export default function WaitlistPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row max-w-[1000px] w-full p-5 md:space-x-16">
        <div className="flex-1 flex flex-col justify-center items-center text-center md:pr-10 mb-10 md:mb-0">
          <div className="w-full max-w-[300px]">
            <div className="w-[100px] h-[100px] bg-[#007AFF] rounded-[25px] flex justify-center items-center mb-5 mx-auto overflow-hidden">
              <Image 
                src="/cookItAI-icon.png" 
                alt="CookIt AI app icon" 
                width={100} 
                height={100} 
                className="rounded-[25px]"
              />
            </div>
            <h1 className="text-5xl font-bold mb-2.5">CookIt AI</h1>
            <p className="text-[#86868b] mb-5">Join the waitlist to be one of the first to join the TestFlight.</p>
            <form action="https://formspree.io/f/your_form_id" method="POST" className="flex flex-col w-full">
              <input type="email" name="email" placeholder="name@email.com" required 
                className="p-3 mb-3 bg-gray-100 border-none rounded-md text-gray-700" />
              <button type="submit" 
                className="p-3 bg-black text-white border-none rounded-md cursor-pointer font-semibold">
                Join the waitlist
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 justify-center items-center hidden md:flex">
          <Image src="/iphone-mockup.png" alt="iPhone showing Today app" width={300} height={600} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
