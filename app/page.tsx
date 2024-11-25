export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/embersflying.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-6xl font-bold">Welcome to the Home Page!</h1>
        <p className="mt-4 text-xl">Your content goes here.</p>
      </div>

      {/* Optional Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
    </div>
  );
}
