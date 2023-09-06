


const Tecnologies = () => {
    let {title, descripition} = props.data;
  return (
<div className=' flex-col justify-center m-3 w-full h-full  cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow '>
    <div className="text-white text-lg  text-center tracking-wider p-5 font-semibold  capitalize leading-normal ">{title}</div>
    <p className='font-secondary leading-tight text-center'>
       {descripition}
    </p>
</div>
  );
};

<CardServices data={{title:'Artificial', descripition:'Lorem20 '}} />
export default Tecnologies;