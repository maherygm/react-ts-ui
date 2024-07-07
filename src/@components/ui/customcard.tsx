type imagesProps = {
  images: string;
  description: string;
  user: string;
};

const Customcard = (props: imagesProps) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden  bg-zinc-800 rounded-lg  w-80 h-96">
      <img src={props.images} className="w-full" alt="image" />
    </div>
  );
};

export default Customcard;
