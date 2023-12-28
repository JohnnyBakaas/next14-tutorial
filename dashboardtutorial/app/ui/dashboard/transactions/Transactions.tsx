import styles from "./Transactions.module.css";

const data: TableContentProps[] = [
  {
    name: "John Doe",
    status: "Pending",
    date: "14.02.2023",
    amount: "3.200",
  },
  {
    name: "John Doe",
    status: "Canceled",
    date: "13.02.2023",
    amount: "13.200",
  },
  {
    name: "John Doe",
    status: "Done",
    date: "12.02.2023",
    amount: "2.250",
  },
];

export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Last Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <TableContent
              name={e.name}
              status={e.status}
              date={e.date}
              amount={e.amount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

type TableContentProps = {
  name: string;
  status: "Pending" | "Done" | "Canceled";
  date: string;
  amount: string;
};

const TableContent = ({ name, status, date, amount }: TableContentProps) => {
  return (
    <tr>
      <td className={styles.user}>
        <img
          src="https://www.politihogskolen.no/globalassets/etter-og-videreutdanning/ansattprofiler/politihogskolen-dummy-profilbilde.jpg"
          alt="https://www.politihogskolen.no/globalassets/etter-og-videreutdanning/ansattprofiler/politihogskolen-dummy-profilbilde.jpg"
          className={styles.userImage}
        />
        {name}
      </td>
      <td>
        <span
          className={
            status === "Pending"
              ? styles.pending
              : status === "Canceled"
              ? styles.canceled
              : styles.done
          }
        >
          {status}
        </span>
      </td>
      <td>{date}</td>
      <td>${amount}</td>
    </tr>
  );
};
