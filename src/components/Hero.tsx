import Image from 'next/image'

const Hero = () => {
  return (
    <main className='w-screen min-h-screen flex flex-col-2 justify-center items-center p-24 gap-12 bg-gradient-to-b from-[--background-start] to-[--background-end]'>
    <div className="max-w-4xl flex flex-col justify-center items-center gap-6 text-center">
      <h1 className='w-full text-5xl md:text-6xl font-bold text-[--primary]'>
        Soluciones Web Modernas para el Éxito de tu Negocio
      </h1>
      <p className='text-xl md:text-2xl font-light text-[--secondary] mt-4'>
      Creamos sitios web rápidos, modernos y de alta conversión que generan resultados.
      </p>
    </div>
  
    <div className='w-full max-w-6xl flex justify-center items-center p-6'>
      <Image
        src="/undraw_responsive_csbt (2).svg"
        width={200}
        height={100}
        alt="Responsive Web Design Illustration"
        className='w-full h-auto'
      />
    </div>
  </main>
  )
}
export default Hero;