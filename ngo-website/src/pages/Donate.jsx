import { useState } from "react";

function Donate() {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");

  const handleDonate = () => {
    if (!amount || amount <= 0) {
      setMessage("Enter a valid amount");
      return;
    }

    setTotal(total + Number(amount));
    setMessage("Thank you for supporting the environment 🌱");
    setAmount("");
  };

  const presetAmounts = [100, 500, 1000];

  return (
    <section className="donate">
      <h2>Support Our Mission</h2>

      <p>Select an amount:</p>
      <div>
        {presetAmounts.map((amt) => (
          <button key={amt} onClick={() => setAmount(amt)}>
            ₹{amt}
          </button>
        ))}
      </div>

      <p>Or enter custom amount:</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleDonate}>Donate</button>

      <h3>Total Raised: ₹{total}</h3>
      <p className="success">{message}</p>
    </section>
  );
}

export default Donate;