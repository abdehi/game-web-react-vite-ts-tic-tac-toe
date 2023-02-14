type Props = {
  index: number;
  onClick(event: any): void;
  player?: string;
};

export default function Square({ index, onClick, player }: Props) {
  return (
    <td
      data-cell-index={index}
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "50px",
        height: "50px",
        textAlign: "center",
      }}
      {...{ onClick }}
    >
      {player}
    </td>
  );
}
