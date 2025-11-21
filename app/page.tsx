export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - now wraps everything */}
      <section className="relative text-black flex flex-col md:flex-row overflow-hidden min-h-screen">
        
        {/* Navbar - positioned absolutely over content */}
        <header className="absolute top-0 left-0 right-0 z-20 flex text-blue-600 items-center justify-between px-10 py-6">
          <div className="text-xl font-bold bg-gray-200 px-4 py-2 rounded">LOGO</div>

          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <a href="#" className="flex items-center space-x-1">
              <span>Lorem Ipsum</span>
              <span>▼</span>
            </a>

            <a href="#" className="flex items-center space-x-1">
              <span>Lorem Ipsum</span>
              <span>▼</span>
            </a>

            <a href="#" className="flex items-center space-x-1">
              <span>Lorem Ipsum</span>
              <span>▼</span>
            </a>

            <a href="#">Lorem Ipsum</a>
          </nav>

          <button className="px-4 py-2 border rounded-md bg-white">Sign In</button>
        </header>

        {/* Left Content */}
        <div className="w-full md:w-1/2 px-10 py-20 z-10 flex flex-col justify-center min-h-screen">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Lorem ipsum dolor<br />sit amet
          </h1>

          <p className="text-gray-600 mt-5 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
            sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
            imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
            Nunc euismod ultricies etiam nulla habitasse.
          </p>

          {/* Form */}
          <div className="mt-8 flex items-center space-x-3">
            <input
              type="text"
              placeholder=""
              className="px-4 py-3 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700">
              <span>Submit</span>
              <span>→</span>
            </button>
          </div>

          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
            <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>No credit card required!</span>
          </div>
        </div>

        {/* Right Image Section with Diagonal Clip - extends full height */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
          <div 
            className="w-full h-full"
            style={{
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
              WebkitClipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <img
              src="/motorcycle.png"
              className="w-full h-full object-cover"
              alt="Hero"
            />
          </div>
        </div>
      </section>

    
{/* Second Content Section */}
<section className="w-full bg-gray-50 px-10 py-20 relative overflow-hidden">
  
  {/* Decorative background pattern/shapes */}

  {/* White Container Box */}
  <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-10 md:p-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

      {/* Left Content */}
      <div className="flex flex-col space-y-6">

        <p className="text-blue-600 font-medium text-sm uppercase">
          Lorem ipsum dolor sit
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase">
          LOREM IPSUM <br /> DOLOR SIT AMET
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>

        {/* Feature List */}
        <div className="space-y-6 pt-4">

          {/* Item 1 */}
          <div className="flex items-start space-x-4">
            <img
              src="/section1-1.png"
              className="w-20 h-16 rounded object-cover flex-shrink-0"
              alt=""
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4">
            <img
              src="/section1-2.png"
              className="w-20 h-16 rounded object-cover flex-shrink-0"
              alt=""
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna
              ullamcorper id dui cursus. Venenatis.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-4">
            <img
              src="/section1-3.png"
              className="w-20 h-16 rounded object-cover flex-shrink-0"
              alt=""
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu
              facilisi enim. Ut diam auctor tortor tincidunt.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-6 pt-6">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700">
            <span>Lorem Ipsum</span>
            <span>→</span>
          </button>

          <div className="flex items-center space-x-2 text-blue-600">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011-.25 11.72 11.72 0 003.68.59 1 1 0 011 1V21a1 1 0 01-1 1A19 19 0 015 3a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1z"/>
            </svg>
            <span className="font-medium">123456789</span>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <img
          src="/section-large.png"
          className="w-full h-full min-h-[500px] rounded-lg object-cover shadow-lg"
          alt="Section"
        />
      </div>

    </div>

    {/* Gradient Bar */}
    <div className="mt-12 h-2 w-full bg-gradient-to-r from-blue-500 via-teal-500 via-green-500 to-purple-900 rounded-full"></div>
  </div>
</section>


{/* THIRD SECTION */}
<section className="w-full bg-white px-10 py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left Text Block */}
    <div className="flex flex-col space-y-6">

      <p className="text-blue-600 font-medium text-sm">
        Lorem ipsum dolor sit amet
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase">
        LOREM IPSUM DOLOR SIT <br />
        AMET CONSECTETUR. EU <br />
        ELIT.
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
        condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec
        posuere velit eu lacus suspendisse ornare.
      </p>

      {/* Bullet List with Red Icon Images */}
      <div className="space-y-4 pt-2">

        {/* Item 1 */}
        <div className="flex items-start space-x-3">
          <img
            src="/icon-red.png"
            className="w-8 h-8 object-contain flex-shrink-0 mt-1"
            alt="icon"
          />
          <div>
            <p className="text-gray-800 font-semibold text-sm">
              Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
              viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
              vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start space-x-3">
          <img
            src="/icon-red.png"
            className="w-8 h-8 object-contain flex-shrink-0 mt-1"
            alt="icon"
          />
          <div>
            <p className="text-gray-800 font-semibold text-sm">
              Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
              viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
              vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start space-x-3">
          <img
            src="/icon-red.png"
            className="w-8 h-8 object-contain flex-shrink-0 mt-1"
            alt="icon"
          />
          <div>
            <p className="text-gray-800 font-semibold text-sm">
              Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
              viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
              vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Right Image */}
    <div>
      <img
        src="/section-3.png"
        className="w-full h-auto rounded-lg object-cover shadow-sm"
        alt=""
      />
    </div>

  </div>

  {/* Gradient Bar */}
  <div className="max-w-7xl mx-auto mt-16">
    <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-teal-500 via-green-500 to-purple-900 rounded-full"></div>
  </div>
</section>

{/* FOURTH SECTION - FULL WIDTH HERO WITH OVERLAY */}
<section className="relative w-full h-[600px] flex items-center justify-center text-center">

  {/* Background Image */}
  <img
    src="/section-4-bg.png"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
      LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS <br />
      ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
    </h2>

    <p className="text-white/90 mt-6 text-base md:text-lg leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum
      nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus
      id luctus id. At quis nunc libero urna arcu vulputate sed et. Nisi porta massa diam
      condimentum nulla quam.
    </p>

    <p className="text-white/90 mt-5 text-base md:text-lg leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum
      ultricies non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At
      viverra quis eu malesuada velit et porttitor. Nulla luctus quam lacus lacus non at.
      Tincidunt morbi feugiat a pulvinar vestibulum natoque nulla ligula. Tincidunt cursus vitae leo.
    </p>

    <button className="mt-8 bg-white text-black px-6 py-2 rounded-md font-medium flex items-center mx-auto space-x-2">
      <span>Lorem Ipsum</span>
      <span>→</span>
    </button>
  </div>
</section>


{/* BRAND LOGOS SECTION */}
<section className="w-full bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h3 className="text-3xl md:text-4xl font-extrabold mb-12">
      LOREM IPSUM DOLOR SIT AMET <br />
      CONSECTETUR. COMMODO LEO AMET.
    </h3>

    {/* Logos Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">

      <img src="/logo-hero.png" className="h-10 object-contain" alt="" />
      <img src="/logo-honda.png" className="h-10 object-contain" alt="" />
      <img src="/logo-bajaj.png" className="h-10 object-contain" alt="" />
      <img src="/logo-tvs.png" className="h-10 object-contain" alt="" />
      <img src="/logo-royal.png" className="h-10 object-contain" alt="" />

      <img src="/logo-yamaha.png" className="h-10 object-contain" alt="" />
      <img src="/logo-ktm.png" className="h-10 object-contain" alt="" />
      <img src="/logo-ather.png" className="h-10 object-contain" alt="" />
      <img src="/logo-ola.png" className="h-10 object-contain" alt="" />
      <img src="/logo-revolt.png" className="h-10 object-contain" alt="" />

      <img src="/logo-ultra.png" className="h-10 object-contain" alt="" />
      <img src="/logo-tork.png" className="h-10 object-contain" alt="" />
    </div>

  </div>
</section>
{/* FIFTH SECTION - CARD GRID */}
<section className="w-full bg-white py-20 px-10 relative">

  {/* Header */}
  <div className="max-w-4xl mx-auto text-left mb-14">
    <p className="text-blue-600 font-medium text-sm">
      Lorem ipsum dolor sit amet
    </p>

    <h2 className="text-4xl font-extrabold mt-3">
      LOREM IPSUM DOLOR SIT
    </h2>

    <p className="text-gray-600 mt-4">
      Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
      Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet.
      Hendrerit tellus at purus lectus.
    </p>
  </div>

  {/* Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Card 1 */}
    <div className="border rounded-xl shadow-sm overflow-hidden bg-white">
      <img
        src="/card-1.png"
        alt=""
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-lg">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="text-gray-600 text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi.
          Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus
          nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
        </p>
        <a className="text-blue-600 font-medium text-sm mt-4 inline-block" href="#">
          Learn More
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="border rounded-xl shadow-sm overflow-hidden bg-white">
      <img
        src="/card-2.png"
        alt=""
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-lg">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="text-gray-600 text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi.
          Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus
          nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
        </p>
        <a className="text-blue-600 font-medium text-sm mt-4 inline-block" href="#">
          Learn More
        </a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="border rounded-xl shadow-sm overflow-hidden bg-white">
      <img
        src="/card-3.png"
        alt=""
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-lg">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="text-gray-600 text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi.
          Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus
          nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
        </p>
        <a className="text-blue-600 font-medium text-sm mt-4 inline-block" href="#">
          Learn More
        </a>
      </div>
    </div>

    {/* Card 4 */}
    <div className="border rounded-xl shadow-sm overflow-hidden bg-white">
      <img
        src="/card-4.png"
        alt=""
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-lg">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="text-gray-600 text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi.
          Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus
          nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
        </p>
        <a className="text-blue-600 font-medium text-sm mt-4 inline-block" href="#">
          Learn More
        </a>
      </div>
    </div>

  </div>
</section>
{/* SIXTH SECTION – QUOTE FORM */}
<section className="w-full">

  {/* Header Banner */}
  <div className="relative w-full h-[350px] flex items-center justify-center text-center">

    <img
      src="/section-6-bg.png"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 max-w-4xl px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
        DOLOR SIT AMET CONSECTETUR. QUIS  
        ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA  
        MI. DOLOR SIT AMET CONSECTETUR. QUIS  
        ADIPISCING
      </h2>
    </div>
  </div>

  {/* Form Section */}
  <div className="max-w-5xl mx-auto py-20 px-6">

    <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
      REQUEST A QUOTE
    </h3>

    <form className="space-y-6">

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="border rounded-md px-4 py-3 w-full"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border rounded-md px-4 py-3 w-full"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded-md px-4 py-3 w-full"
        />
        <input
          type="text"
          placeholder="Product Name"
          className="border rounded-md px-4 py-3 w-full"
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <select className="border rounded-md px-4 py-3 w-full">
          <option>State</option>
        </select>

        <select className="border rounded-md px-4 py-3 w-full">
          <option>Quantity</option>
        </select>
      </div>

      {/* Project description */}
      <div>
        <textarea
          rows="5"
          placeholder="Please share the User Project"
          className="border rounded-md px-4 py-3 w-full"
        />
      </div>

      {/* Terms */}
      <p className="text-center text-sm text-gray-600">
        By submitting this form you agree to our{" "}
        <a href="#" className="text-blue-600 underline">Terms of Service</a> and{" "}
        <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
      </p>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
          Lorem Ipsum →
        </button>
      </div>

    </form>

  </div>
</section>
{/* MOBILE APP PROMO SECTION */}
<section className="w-full bg-white py-20 px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT TEXT CONTENT */}
    <div className="space-y-4">
      <p className="text-blue-600 font-medium text-sm">Lorem Ipsum</p>

      <h2 className="text-3xl font-extrabold text-black leading-tight">
        Lorem Ipsum Dolor <br /> Sit Amet
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed max-w-md">
        Lorem ipsum dolor sit amet consectetur. Vulputate amet
        aliquet morbi suspendisse convallis. Urna a urna lectus
        donec felis risus dui pellentesque. Pellentesque ultricies ipsum.
      </p>

      {/* STORE BUTTONS */}
      <div className="flex items-center gap-4 mt-4">
        <img src="/google-play.png" alt="Google Play" className="h-10" />
        <img src="/app-store.png" alt="App Store" className="h-10" />
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src="/mobile-hand.png"
        alt="Phone"
        className="max-w-md w-full object-contain"
      />
    </div>

  </div>
</section>


{/* GALLERY SECTION */}
<section className="w-full bg-[#f3f7fc] py-20 px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

    {/* LEFT TEXT */}
    <div className="space-y-4">
      <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">No Limits</p>

      <h2 className="text-3xl font-extrabold text-black leading-tight">
        Lorem Ipsum Dolor Sit <br /> Amet
      </h2>

      <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra
        tempor quis arcu. Ipsum nullam.
      </p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium w-max">
        Lorem Ipsum →
      </button>
    </div>

    {/* RIGHT GALLERY GRID */}
    <div className="grid grid-cols-3 gap-4">
      <img src="/gallery-1.png" className="w-full h-28 object-cover rounded-md" />
      <img src="/gallery-2.png" className="w-full h-28 object-cover rounded-md" />
      <img src="/gallery-3.png" className="w-full h-28 object-cover rounded-md" />

      <img src="/gallery-4.png" className="w-full h-28 object-cover rounded-md" />
      <img src="/gallery-5.png" className="w-full h-28 object-cover rounded-md" />
      <img src="/gallery-6.png" className="w-full h-28 object-cover rounded-md" />

      <img src="/gallery-7.png" className="w-full h-28 object-cover rounded-md col-span-3" />
    </div>

  </div>
</section>


{/* SEVENTH SECTION */}
<section className="w-full bg-white py-20 px-10 relative">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-xl shadow-sm p-10">

    {/* LEFT IMAGE */}
    <img
      src="/next-lower-hero.png"
      alt="Hero"
      className="w-full h-[380px] object-cover rounded-lg"
    />

    {/* RIGHT CONTENT */}
    <div className="flex flex-col space-y-5">

      <p className="text-blue-600 text-sm font-medium">Lorem Ipsum</p>

      <h2 className="text-3xl font-extrabold leading-tight">
        LOREM IPSUM DOLOR SIT <br />
        AMET CONSECTETUR. ENIM <br />
        DONEC.
      </h2>

      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio amet
        enim amet est.
      </p>

      {/* TWO COLUMN BULLET LIST */}
      <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm">
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium w-max mt-4">
        Lorem Ipsum →
      </button>

    </div>
  </div>

  {/* Bottom Colored Bar */}
  <div className="w-full h-2 mt-10 bg-gradient-to-r from-blue-600 via-green-500 to-purple-700 rounded-full" />
</section>
{/* EIGHT SECTION - TESTIMONIALS */}
<section className="w-full bg-blue-600 py-20 px-10 text-white">

  <div className="max-w-7xl mx-auto">

    {/* Top Row */}
    <div className="flex items-start justify-between flex-wrap gap-6">

      <div>
        <p className="text-sm">Join other Sun harvesters</p>

        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Lorem Ipsum Dolor Sit Amet
        </h2>

        <p className="text-white/80 mt-3 max-w-xl text-sm leading-relaxed">
          Duis neiland lacus libero, placerat pharetra elementum porttitor.
          Bolifend mi tristique condimentum consequat fusce risus, ultrices aliquet commodo.
        </p>
      </div>

      <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium h-max">
        Lorem Ipsum →
      </button>

    </div>

    {/* Card Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      {/* Card 1 */}
      <div className="bg-white text-black rounded-xl p-6 shadow-sm">
        <div className="text-blue-600 text-3xl mb-3">🌤️</div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Para monacena quis elit vitae eu. Semper pharetra natoque amet dolor.
          Praesent morbi sit hendrerit neque semper urna est ultricies neque.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <img src="/avatar-1.jpg" className="w-10 h-10 rounded-full" alt="" />
          <p className="text-sm font-medium">Jake Cooper</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white text-black rounded-xl p-6 shadow-sm">
        <div className="text-blue-600 text-3xl mb-3">⚡</div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Veliscia sit sit pellentesque bibendum at. Quis at elementum feugiat mauris
          egestas arcu pellentesque. Vitae elit purus mi venenatis arcu.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <img src="/avatar-2.jpg" className="w-10 h-10 rounded-full" alt="" />
          <p className="text-sm font-medium">Ralph Edwards</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white text-black rounded-xl p-6 shadow-sm">
        <div className="text-blue-600 text-3xl mb-3">💡</div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Viverra lacus suspendisse nisl. Magna euismod feugiat id sapien vitae.
          Massa dictumst auctor feugiat vitae interdum sed.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <img src="/avatar-3.jpg" className="w-10 h-10 rounded-full" alt="" />
          <p className="text-sm font-medium">Courtney Henry</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white text-black rounded-xl p-6 shadow-sm">
        <div className="text-blue-600 text-3xl mb-3">🔥</div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Hendrerit sagis et volutpat feugiat. Cursus bibendum quam risus tellus.
          At id elementum aenean dictum aliquet gravida pellentesque.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <img src="/avatar-4.jpg" className="w-10 h-10 rounded-full" alt="" />
          <p className="text-sm font-medium">Cameron Diaz</p>
        </div>
      </div>

    </div>

    {/* Bottom Carousel Navigation */}
    <div className="flex items-center gap-4 mt-10">
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition">
        ‹
      </button>

      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition">
        ›
      </button>
    </div>

  </div>
</section>
{/* NINTH SECTION */}
<section className="w-full bg-white py-20 px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div className="flex flex-col space-y-6">

      <h2 className="text-3xl font-extrabold">
        LOREM IPSUM DOLOR SIT AMET
      </h2>

      {/* TABS */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Research</button>
        <button className="text-gray-500 hover:text-black transition">Plan</button>
        <button className="text-gray-500 hover:text-black transition">Design</button>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed max-w-md">
        Egastas fringilla aliquet leo. Hendrerit eu ante, mauris enim nibh. Nquis
        pulvinar dolore eu lectus felis eu turpis tortor, bibendum. Nulla felis ac ante
        eu ac eu erat. Praesent malesuada placerat arcu eu velit convallis nunc in
        accumsan.
      </p>

      <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
        Check tools →
      </a>

    </div>

    {/* RIGHT IMAGE */}
    <img
      src="/handshake.png"
      alt="Handshake"
      className="w-full h-[350px] rounded-lg object-cover shadow"
    />
  </div>
</section>
{/* TENTH SECTION */}
<section className="w-full bg-white py-20 px-10 relative">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6">

      <h2 className="text-3xl font-extrabold leading-tight">
        LOREM IPSUM DOLOR SIT <br />
        AMET CONSECTETUR. <br />
        DIGNISSIM TELLUS.
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed max-w-md">
        Lorem ipsum dolor sit amet consectetur. In malesuada morbi et lobortis 
        amet laoreet sapien ipsum eget. Adipiscing id odio in libero nisl tortor 
        tincidunt ultricies fringilla mauris. Aenean egestas turpis porta pulvinar.
        Nisi in facilisis augue fermentum eget egestas sociis faucibus faucibus.
        Tempor fusce.
      </p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-sm w-max">
        Lorem Ipsum →
      </button>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <img
        src="/service-meeting.png"
        alt="Service Meeting"
        className="w-full h-[380px] rounded-lg object-cover shadow-md"
      />

      {/* Floating Card */}
      <div className="absolute -bottom-16 -left-10 bg-white rounded-xl shadow-lg p-6 w-[320px]">

        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-800">Lorem ipsum dolor sit</h4>
          <span className="text-red-500 text-xl">📌</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Habitant volutpat ultrices nisi 
          donec in odio tempor sit feugiat quis. Nisl convallis cursus et lectus 
          tortor at ornare ullamcorper orci. Pharetra nec suspendisse pharetra nulla 
          egestas suspendisse bibendum vulputate risus. Enim id egestas nunc id neque. 
          Id eget eu ac pharetra ut pellentesque turpis elit nec in in consectetur.
        </p>

      </div>
    </div>

  </div>

  {/* Bottom Colored Divider */}
  <div className="w-full h-[4px] mt-24 bg-gradient-to-r from-blue-600 via-green-500 to-purple-700" />
</section>
{/* TWELFTH SECTION */}
<section className="w-full bg-white py-20 px-10">

  {/* Heading */}
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold">
      LOREM IPSUM DOLOR SIT AMET
    </h2>

    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
      Aliquet sed nulla tincidunt pulvinar nec non felis et facilisis dictumst. 
      Ornare rhoncus quis velit massa feugiat ultricies. Malesuada et aliquet 
      mi ac est quis nisl, auctor amet dignissim. Sed orci vestibulum egestas 
      quis euismod magna egestas vitae. Nisl eu fringilla habitant ac facilisi.
    </p>
  </div>

  {/* Content Row */}
  <div className="max-w-6xl mx-auto mt-14 relative flex flex-col md:flex-row gap-8 items-start justify-center">

    {/* Left Image */}
    <img
      src="/story-hero.png"
      alt="Story Hero"
      className="w-full md:w-1/2 h-[350px] object-cover rounded-lg shadow-sm"
    />

    {/* Floating Card */}
    <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-[380px] relative md:-ml-10">
      <h4 className="text-lg font-semibold">Artist & Investor</h4>

      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        Eirmod sagittis, at porttitor morbi libero vitae amet, libero adipiscing 
        auctor. Malesuada eros tortor id faucibus a fermentum. Vitae ultricies 
        blandit. Egestas eu auctor tristique gravida sed at.
      </p>

      <a href="#" className="text-blue-600 text-sm font-medium mt-4 inline-block">
        Read Full Story →
      </a>
    </div>

  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center gap-3 mt-10">
    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
  </div>

</section>
{/* SECTION 13 — FAQ + CTA + FOOTER */}
<section className="w-full bg-white py-20 px-10">

  {/* FAQ TITLE */}
  <h2 className="text-2xl font-extrabold mb-10">
    FREQUENTLY ASKED QUESTIONS (FAQS)
  </h2>

  {/* FAQ LIST */}
  <div className="space-y-4">

    {/* FAQ 1 — OPEN */}
    <div className="border rounded-lg p-5">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-800">
          Lorem ipsum dolor sit amet consectetur?
        </h4>
        <span className="text-xl text-gray-700">—</span>
      </div>

      <p className="text-gray-600 text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur. Vulputate amet atport molestie sagittisdonec
        leo arcu donec vitae fusce felis nulla pellentesque. Pellentesque ultricies lorem.
      </p>
    </div>

    {/* FAQ 2 */}
    <div className="border rounded-lg p-5 flex justify-between items-center">
      <h4 className="font-semibold text-gray-800">
        Lorem ipsum dolor sit amet consectetur?
      </h4>
      <span className="text-xl text-gray-700">+</span>
    </div>

    {/* FAQ 3 */}
    <div className="border rounded-lg p-5 flex justify-between items-center">
      <h4 className="font-semibold text-gray-800">
        Lorem ipsum dolor sit amet consectetur?
      </h4>
      <span className="text-xl text-gray-700">+</span>
    </div>

    {/* FAQ 4 */}
    <div className="border rounded-lg p-5 flex justify-between items-center">
      <h4 className="font-semibold text-gray-800">
        Lorem ipsum dolor sit amet consectetur?
      </h4>
      <span className="text-xl text-gray-700">+</span>
    </div>

  </div>

  {/* CTA BOX */}
  <div className="mt-24 flex flex-col items-center text-center">

    <div className="bg-gray-200 px-4 py-1 rounded font-bold">LOGO</div>

    <h3 className="text-3xl font-extrabold mt-6">
      LOREM IPSUM DOLOR SIT AMET <br />
      CONSECTETUR. DUI.
    </h3>

    <p className="text-gray-600 max-w-md mt-4 text-sm">
      Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor proinert
      fringilla nisl. Aen bazbi rutrum nunc.
    </p>

    <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium">
      Lorem Ipsum →
    </button>

  </div>

</section>

{/* FOOTER */}
<footer className="w-full bg-[#0d1224] text-white py-20 px-10 mt-16">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">

    {/* Logo Column */}
    <div>
      <div className="bg-gray-200 text-black font-bold px-4 py-1 rounded inline-block">LOGO</div>
    </div>

    {/* Column 1 */}
    <div className="space-y-2 text-sm">
      <p className="font-medium text-white/80">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
    </div>

    {/* Column 2 */}
    <div className="space-y-2 text-sm">
      <p className="font-medium text-white/80">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
    </div>

    {/* Column 3 */}
    <div className="space-y-2 text-sm">
      <p className="font-medium text-white/80">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
    </div>

    {/* Column 4 */}
    <div className="space-y-2 text-sm">
      <p className="font-medium text-white/80">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
      <p className="text-white/60">Lorem Ipsum</p>
    </div>

  </div>
</footer>

    </div>
  );
}
