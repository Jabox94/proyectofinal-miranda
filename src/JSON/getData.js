const Products = [
  {
    "id": 1,
    "title": "Leche",
    "brand": "Conaprole",
    "price": 20,
    "description": "La vaca Lola La vaca Lola Tiene cabeza y tiene cola La vaca Lola La vaca Lola Tiene cabeza y tiene cola Y hace muuu",
    "img": "https://www.conaprole.uy/wp-content/uploads/2019/09/leche-fresca.png",
    "category": "Comida"
  },
  {
    "id": 2,
    "title": "Pan de molde",
    "brand": "Bimbo",
    "price": 10,
    "description": "El pan de molde blanco de Bimbo es una opción versátil y deliciosa para hacer sándwiches, tostadas o simplemente disfrutarlo con tus ingredientes favoritos. Su textura suave y esponjosa lo convierte en el aliado perfecto para tus snacks y comidas",
    "img": "https://polvillo.es/wp-content/uploads/2022/10/pan-de-molde-blanco-1.png",
    "category": "Comida"
  },
  {
    "id": 3,
    "title": "Huevos",
    "brand": "Granja Feliz",
    "price": 30,
    "description": "Los huevos frescos de Granja Feliz son una fuente natural de proteínas y otros nutrientes importantes para una dieta equilibrada. Ideales para hacer tortillas, huevos revueltos y diversas recetas culinarias que realzan su sabor y valor nutricional",
    "img": "https://tiendapopular.uy/wp-content/uploads/2022/11/Maple-de-huevos.png",
    "category": "Comida"
  },
  {
    "id": 4,
    "title": "Arroz",
    "brand": "Tío Ben's",
    "price": 10,
    "description": "El arroz Tío Ben's es un ingrediente fundamental en la cocina; su textura y sabor lo hacen perfecto para acompañar todo tipo de platos, desde guisos hasta sushi. Una opción confiable y de alta calidad para tus comidas diarias",
    "img": "https://www.verleal.com/wp-content/uploads/2021/01/ayudas-culinarias-arroz.png",
    "category": "Comida"
  },
  {
    "id": 5,
    "title": "Atún en lata",
    "brand": "Calvo",
    "price": 20,
    "description": "El atún en lata en aceite de Calvo, con trozos de atún, es una opción saludable y deliciosa para tus ensaladas, platos de pasta o snacks. Listo para comer y realzar tus creaciones culinarias",
    "img": "https://www.oprumin.com/images/virtuemart/product/resized/0114468338.At%C3%B9n%20en%20trozos%20al%20aceite_640x640.png",
    "category": "Comida"
  },
  {
    "id": 6,
    "title": "Pasta",
    "brand": "Barilla",
    "price": 10,
    "description": "Disfruta de la auténtica pasta italiana de la marca Barilla con sus fettuccine. Esta pasta, elaborada con los mejores ingredientes, ofrece una experiencia culinaria única, especialmente cuando se combina con tus salsas favoritas",
    "img": "https://www.dececco.com/wp-content/uploads/2018/05/0SW4233-FETTUCCINE-3.png",
    "category": "Comida"
  },
  {
    "id": 7,
    "title": "Aceite de oliva",
    "brand": "Carbonell",
    "price": 40,
    "description": "El aceite de oliva Carbonell, reconocido por su calidad y sabor, es perfecto para realzar tus platos con un toque mediterráneo. Ideal para aliñar ensaladas, saltear verduras y dar un toque especial a tus recetas",
    "img": "https://www.supermaxi.com/wp-content/uploads/2021/07/8410660101115.png",
    "category": "Comida"
  },
  {
    "id": 8,
    "title": "Azúcar",
    "brand": "Azucarera",
    "price": 10,
    "description": "El azúcar de la marca Azucarera, un ingrediente esencial para endulzar tus bebidas calientes, postres y repostería casera. Su textura fina y granulada se disuelve fácilmente, asegurando un sabor dulce y uniforme en tus preparaciones",
    "img": "https://sitio111154.p04.mvdsimple.uy/web/image/product.template/11/image",
    "category": "Comida"
  },
  {
    "id": 9,
    "title": "Café molido",
    "brand": "Nescafé",
    "price": 30,
    "description": "Disfruta del sabor y aroma del café molido de Nescafé con un tostado suave. Una elección perfecta para esos momentos de relajación y disfrute. Prepara una taza de café aromático y delicioso con la calidad que caracteriza a esta renombrada marca",
    "img": "https://www.nescafe.com/cam/sites/default/files/2020-07/TUESTE%20SUAVE%202000x2000.png",
    "category": "Comida"
  },
  {
    "id": 10,
    "title": "Refresco",
    "brand": "Coca-Cola",
    "price": 10,
    "description": "Refresca tu paladar con la clásica Coca-Cola Light en una lata de 33 cl. Una bebida burbujeante y ligera, perfecta para acompañar tus comidas o disfrutar de un momento de relajación. Su sabor inconfundible te cautivará",
    "img": "https://www.jrzarra.com/437-large_default/coca-cola-light-de-33cl.jpg",
    "category": "Bebidas"
  },
  {
    "id": 11,
    "title": "Yogur natural",
    "brand": "Danone",
    "price": 30,
    "description": "El yogur natural de Danone es una opción saludable y deliciosa para incorporar en tu dieta diaria. Su textura cremosa y sabor suave lo convierten en un excelente",
    "img": "https://www.conaprole.uy/wp-content/uploads/2013/08/Co%CC%81d.-201-600x600.png",
    "category": "Comida"
  },
  {
    "id": 12,
    "title": "Tomate en lata",
    "brand": "Orlando",
    "price": 10,
    "description": "Los tomates triturados en lata de Orlando te ofrecen la comodidad de tener tomates frescos listos para usar en tus recetas. Ideales para salsas, guisos y platos mediterráneos",
    "img": "https://pontevedra.com.uy/imagenes/productos/tomate-triturado-4kg.png",
    "category": "Comida"
  },
  {
    "id": 13,
    "title": "Cerveza",
    "brand": "Heineken",
    "price": 20,
    "description": "Disfruta del sabor premium de la cerveza Heineken en un paquete de seis botellas de 330 ml. Una opción refrescante y de alta calidad para compartir momentos especiales o simplemente relajarte después de un largo día",
    "img": "https://dislicoresqa.vtexassets.com/arquivos/ids/282129/364025-CERVEZA_HEINEKEN_SIX_PACK_BOTELLA_330ML.png?v=637901739211030000",
    "category": "Bebidas"
  },
  {
    "id": 14,
    "title": "Jabón de baño",
    "brand": "Dove",
    "price": 10,
    "description": "El jabón de baño Dove proporciona una limpieza suave e hidratante para tu piel. Enriquecido con agentes hidratantes, este jabón cuida y protege tu piel, dejándola suave y tersa. Presentación: barra de 100 gramos",
    "img": "https://assets.unileversolutions.com/v1/1640933.png",
    "category": "Higiene"
  },
  {
    "id": 15,
    "title": "Papel higiénico",
    "brand": "Scott",
    "price": 20,
    "description": "El papel higiénico Scott Elite Pro PLUS ofrece suavidad y durabilidad para una experiencia de limpieza óptima. Con su paquete de 12 rollos, garantiza un uso más prolongado para tu hogar",
    "img": "https://merchant.pedidosya.com.uy/cdn/shop/products/IP6125-FIC-PH-Elite-Pro-PLUS-UH-50m-x12-IP6125-Fab-UY-para-UY_912x700.png?v=1628168068",
    "category": "Higiene"
  },
  {
    "id": 16,
    "title": "Detergente",
    "brand": "Ariel",
    "price": 30,
    "description": "El detergente en polvo Ariel está diseñado para eliminar eficazmente las manchas difíciles mientras mantiene tu ropa limpia y fresca. Su fórmula concentrada ofrece un rendimiento superior en cada lavado",
    "img": "https://supermercadolaestacion.com/31432-large_default/detergente-ariel-x4kg-polvo.jpg",
    "category": "Higiene"
  },
  {
    "id": 17,
    "title": "Champú",
    "brand": "Pantene",
    "price": 20,
    "description": "El champú anticaspa de Pantene cuida y protege tu cabello al tiempo que ayuda a controlar la caspa y mantener un cuero cabelludo saludable. Su fórmula nutre e hidrata, dejando tu cabello suave y con un aroma agradable",
    "img": "https://prd-cdn-emea1-joltx.pgsitecore.com/-/media/growing-families-version1/gf-es/brand/pantene/480x480_pantene_shampoo_anti-dandruff_270ml_ibr_power-image_18-05-2020.ashx?rev=e9b70adff39c45d1a58c5e84a0ff9936",
    "category": "Higiene"
  },
  {
    "id": 18,
    "title": "Galletas",
    "brand": "María",
    "price": 10,
    "description": "Las galletas María individuales son una opción clásica para los snacks, perfectas para disfrutar solas o con bebidas calientes. Su sabor dulce y textura crujiente las hacen irresistibles tanto para adultos como para niños",
    "img": "https://www.gamesacookies.com/sites/gamesa.com/files/2021-11/marias-individual-v3.png",
    "category": "Comida"
  },
  {
    "id": 19,
    "title": "Manzanas",
    "brand": "Fuji",
    "price": 20,
    "description": "Disfruta de la frescura y dulzura de las manzanas Fuji. Esta variedad de manzana es conocida por su sabor jugoso y equilibrado, lo que la convierte en una elección saludable para tus snacks y postres",
    "img": "https://ecommerce-images.bonarea.com/v1/img/es/1000x1000/13_2061_1.png",
    "category": "Comida"
  },
  {
    "id": 20,
    "title": "Pasta de dientes",
    "brand": "Colgate",
    "price": 10,
    "description": "La pasta de dientes Colgate proporciona una limpieza profunda y protección contra las caries. Con su fórmula con flúor, fortalece el esmalte y deja tu boca fresca y protegida",
    "img": "https://cdn.shopify.com/s/files/1/0566/4391/1854/products/7501035911369.png?v=1627869849",
    "category": "Higiene"
  }
]

async function getData() {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(Products)
    }, 200)

  }) //Return end
}

async function getProductData(reference) {

  return new Promise((resolve) => {
    const userRequest = Products.find((item) => item.id == parseInt(reference))

    setTimeout(() => {
      resolve(userRequest)
    }, 200)

  })//Return end
}


async function getCategoryData(reference) {

  return new Promise((resolve) => {
    const userRequest = Products.filter((product) => {
      return product.category.toLowerCase() === reference.toLowerCase();
    })

    setTimeout(() => {
      resolve(userRequest)
    }, 200)

  })//Promise return end
}



export default getData
export { getProductData, getCategoryData }