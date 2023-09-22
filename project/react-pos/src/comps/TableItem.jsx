import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { tableClick } from "../features/table/tableSlice";
const StyledTableItem = styled.div`
  border: 1px solid red;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "aqua")};
  padding: 20px;
  margin: 20px;
  width: 18vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    font-size: 30px;
  }
  &:hover {
    background-color: aquamarine;
  }
`;

export function TableItem({ children }) {
  const t_usable = useSelector((state) => state.table.t_usable);
  const dispatch = useDispatch();

  return (
    <StyledTableItem
      onClick={() => dispatch(tableClick())}
      bgColor={t_usable ? "red" : "aqua"}
    >
      <div>{children}</div>
    </StyledTableItem>
  );
}
