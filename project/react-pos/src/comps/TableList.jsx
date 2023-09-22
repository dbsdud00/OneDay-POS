import { useState } from "react";
import css from "../css/TableList.module.scss";
import { TableItem } from "./TableItem";
import { useDispatch, useSelector } from "react-redux";
import { addTable } from "../features/table/tablesSlice";
import { useEffect } from "react";

const TableList = () => {
  // const sampleTables = [
  //   {
  //     t_seq: 1,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 2,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 3,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 4,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 5,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 6,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 7,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 8,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 9,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 10,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 11,
  //     t_useable: true,
  //   },
  //   {
  //     t_seq: 12,
  //     t_useable: true,
  //   },
  // ];
  const N = 15;
  const tables = useSelector((state) => state.tables);
  const dispatch = useDispatch();
  const tableCon = tables.map((num) => {});

  return <article className={css.table_list}>{tables}</article>;
};
export default TableList;
