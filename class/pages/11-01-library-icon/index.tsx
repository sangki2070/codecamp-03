import { EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(EditOutlined)`
  font-size: 500px;
  color: beige;
`;

export default function LibraryPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
