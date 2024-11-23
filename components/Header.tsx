import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full bg-gray-100">
      <Image
        src="/images/ember1.png" // Use the relative path for public assets
        alt="Logo"
        width={1920} // Set appropriate dimensions for the image
        height={200} // Adjust based on your design
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Header;
