
type PhotoType = {
  id: string;
  filename: string;
  size: 'sm' | 'lg';
}

const photo1:PhotoType = {id: '1', filename: "healthy_man.png", size: 'sm'}
const photo2:PhotoType = {id: '2', filename: "food_woman.png", size: 'sm'}
const photo3:PhotoType = {id: '3', filename: "pregnant_woman.png", size: 'sm'}
const photo4:PhotoType = {id: '4', filename: "smoothie_woman.png", size: 'sm'}
const photo1large:PhotoType = {id: '5', filename: "healthy_man_large.png", size: 'lg'}
const photo2large:PhotoType = {id: '6', filename: "food_woman_large.png", size: 'lg'}
const photo3large:PhotoType = {id: '7', filename: "pregnant_woman_large.png", size: 'lg'}
const photo4large:PhotoType = {id: '8', filename: "smoothie_woman_large.png", size: 'lg'}

export type ServiceType = {
    id: string;
    photos: Array<PhotoType>;
    title: string;
    description: string;
  };
  
  export const SERVICES: Array<ServiceType> = [
    {
      id: "1",
      photos: [photo1, photo1large],
      title: "Mejora de la composición corporal",
      description:
        "Pérdida o aumento de peso. Aprende a comer y a disfrutar de la comida sin poner en riesgo tu salud. Te acompaño, te asesoro y te motivo en el proceso para que puedas cumplir tu objetivo de una manera fácil y agradable. Sin efectos rebotes, aprenderás para toda la vida.",
    },
    {
      id: "2",
      photos: [photo2, photo2large],
  
      title: "Dietoterapia",
      description:
        "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
    },
    {
      id: "3",
      photos: [photo3, photo3large],
  
      title: "Embarazo y lactacia",
      description:
        "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
    },
    {
      id: "4",
      photos: [photo4, photo4large],
  
      title: "Alimentación vegetariana y vegana",
      description:
        "Si sigues una dieta basada en vegetales o quieres empezarla, puedo ayudarte a plantearla de una manera óptima. Tanto en la confección de tus menús como en la toma de suplementos convenientes. En pocas visitas obtendrás herramientas y recetas muy útiles para tu estilo de vida.",
    },
  ];