import Perfil from "../../assets/perfil.webp"

export default function PerfilImg() {
    return (
        <>
            <img className="lg:max-w-[400px] md:max-w-[400px] max-w-[150px] object-contain rounded-full" src={Perfil} rel="preload" loading="lazy" alt="Foto de perfil" />
        </>
    )
}