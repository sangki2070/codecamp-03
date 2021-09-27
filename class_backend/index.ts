import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";
import Product from "./Product.postgres";

const typeDefs = gql`
  # 넣을대는 input이라는 타입이 따로 있음

  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Return {
    message: String
    number: Int
    _id: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Product {
    number: Int
    _id: String
    seller: String
    name: String
    detail: String
    price: Int
    # page: Int
    # createdAt: Date
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board]
    fetchProducts(page: Int): [Product]
    fetchProduct(productId: ID): Product
  }

  type Mutation {
    # createBoard(writer: String, title: String, age: Int): Return

    createBoard(createBoardInput: CreateBoardInput): Return
    updateBoard: Return
    deleteBoard: Return
    createProduct(
      seller: String
      createProductInput: CreateProductInput
    ): Return
    updateProduct(productId: ID, updateProductInput: UpdateProductInput): Return
    deleteProduct(productId: ID): Return
  }
`;

const resolvers = {
  Query: {
    fetchBoard: async () => {
      //데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)

      const result = await Board.findOne({
        where: { number: 1, deletedAt: null },
      });
      return result;
      // result?.age;
      // result?.title;
      // result?.writer;

      // return { writer: result?.writer, title: result?.title, age: result?.age };
    },

    fetchBoards: async () => {
      const result = await Board.find({ where: { deletedAt: null } }); // [{...},{...},{...}]
      return result;
    },

    fetchProducts: async () => {
      const result = await Product.find({ where: { deletedAt: null } });
      return result;
    },

    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({
        where: { _id: args.productId, deletedAt: null },
      });

      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      //데이터베이스 데이터 입력하기

      // const result = await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      const result = await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });

      console.log(result);

      return { message: "성공했습니다.", number: result.identifiers[0].number };
    },

    updateBoard: async (_: any, args: any) => {
      await Board.update({ number: 3 }, { writer: "영희" });
      // 앞 중괄호는 조건, 뒤 중괄호는 변경할 값

      return { message: "수정완료!!!" };
    },

    deleteBoard: async () => {
      // await Board.delete({ number: 4 });

      await Board.update({ number: 5 }, { deletedAt: new Date() });

      return { message: "삭제완료" };
    },

    //실제는 이렇게하지 않고 isDeleted true or flase 이런식으로 구현함
    //isDeletedAt 공란, 2021.09.18 이런식으로 구현함

    createProduct: async (_: any, args: any) => {
      const result = await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });

      return { message: "성공했습니다.", number: result.identifiers[0].number };
    },

    updateProduct: async (_: any, args: any) => {
      // await Product.update({ number: 7 }, { seller: "무무무무" });

      const result = await Product.update(
        { _id: args.productId },
        { ...args.updateProductInput }
      );

      return {
        message: "수정완료~~~",
        // number: result.identifiers[0].number,
        _id: args.productId,
      };
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.update({ _id: args.productId }, { deletedAt: new Date() });

      return { message: "삭제완료~~~" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5015,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결성공시 실행

  console.log("접속완료!!!");
  server.listen({ port: 4000 });
});
