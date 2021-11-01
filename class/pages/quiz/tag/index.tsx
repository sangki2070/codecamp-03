import { gql, useQuery } from "@apollo/client";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      images
      tags
      seller {
        _id
        email
        name
        createdAt
        updatedAt
        picture
      }
    }
  }
`;

export default function TagPage() {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });
  return (
    <>
      {data?.fetchUseditems.map((el) => (
        <div key={el._id}>
          {el.tags[0]?.includes("수면 용품") && (
            <>
              제목:<span>{el.name}</span>
              한줄 요약:<span>{el.remarks}</span>
              가격:<span>{el.price}</span>
              태그:<span>{el.tags}</span>
            </>
          )}
        </div>
      ))}
    </>
  );
}
