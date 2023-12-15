import { PrismaClient, Role } from '@prisma/client';
const db = new PrismaClient();

function getUser() {
  return [
    {
      "id": "5805643b-ae9f-4cc0-8f65-181549f87226",
      "firstName": 'Michal',
      "lastName": 'Sak',
      "email": "sakos@gmail.com",
      "role": Role.USER,
    },
    {
      "id": "5e8e63c2-3c10-4e86-b558-ba4f9469c186",
      "firstName": 'Daria',
      "lastName": 'Bednarek',
      "email": "darenka@gmail.com",
      "role": Role.USER,
    },
  ];
}

function getProducts() {
  return [
    {
      "id": "302b5262-8e79-4367-814f-d678601bf1cd",
      "name": "Nike Zoom Vapor",
      "price": 900,
      "description": "W butach Vapor 15 Elite FG zawładniesz boiskiem. Wykorzystaliśmy w nich poduszkę gazową Zoom Air, stworzoną specjalnie z myślą o piłce nożnej, oraz czepliwą fakturę na wierzchu",
      "photo": "korkiVapor.jpg",
      "createdAt": "2023-12-05T19:55:23.693Z",
      "updatedAt": "2023-12-05T19:56:03.010Z"
    },
    {
      "id": "67395c15-b3bb-41b7-9243-062013579239",
      "name": "nike merculial",
      "price": 300,
      "description": "Szybkość i precyzja gry na naturalnej murawie to właśnie przewaga Zoom Superfly 9 Academy.",
      "photo": "korkiMercurial.jpg",
      "createdAt": "2023-11-28T18:46:59.940Z",
      "updatedAt": "2023-12-05T19:40:41.679Z"
    },
    {
      "id": "bcc849f3-f445-46ca-80a2-2b725d219d35",
      "name": "nike tiempo",
      "price": 200,
      "description": "Nawet legendy ulegają ciągłym przemianom. Bez względu na to, czy dopiero zaczynasz, czy grasz dla zabawy, najnowsza wersja tych korków Club ",
      "photo": "korkiTiempo.jpg",
      "createdAt": "2023-11-28T18:25:47.244Z",
      "updatedAt": "2023-12-05T19:39:06.434Z"
    },
    {
      "id": "ed6ec08b-066b-46cc-920e-ddbd69c7720a",
      "name": "nike hipervenom",
      "price": 400,
      "description": "Buty piłkarskie na sztuczną nawierzchnię typu turf Nike Hypervenom PhantomX III Elite Dynamic Fit",
      "photo": "korkiHipervenom.jpg",
      "createdAt": "2023-11-28T18:25:33.964Z",
      "updatedAt": "2023-12-05T19:41:56.521Z"
    }
  ];
}

function getOrder() {
  return [
    {
      "id": "63087a05-648e-491b-ab65-1f877f3981c4",
      "productId": "ed6ec08b-066b-46cc-920e-ddbd69c7720a",
      "userId": "5e8e63c2-3c10-4e86-b558-ba4f9469c186",
      "address": "kolorowa 3",
      "createdAt": "2023-11-28T18:38:14.302Z",
      "updatedAt": "2023-11-28T18:38:14.302Z"
    },
    {
      "id": "c2129bd5-03e7-4fe1-9826-548a8a73ea03",
      "productId": "ed6ec08b-066b-46cc-920e-ddbd69c7720a",
      "userId": "5805643b-ae9f-4cc0-8f65-181549f87226",
      "address": "kolorowa 32",
      "createdAt": "2023-11-28T18:39:20.961Z",
      "updatedAt": "2023-11-28T18:45:14.140Z"
    },
  ];
}

async function seed() {
  await Promise.all(
    getUser().map((user) => {
      return db.user.create({ data: user });
    }),
  );

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getOrder().map(({ productId, userId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
          user: {
            connect: { id: userId },
          },
        },
      });
    }),
  );
}

seed();