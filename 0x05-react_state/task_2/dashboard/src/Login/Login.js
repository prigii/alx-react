import React from "react";
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  'App-body': {
    fontSize: '1rem',
    padding: "2em",
    borderBottom: '3px solid #e0354b',
    height: '45%',
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  
  form: {
    input: {
      margin: "10px",
    },  
  },
});



function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(e.target.elements.email.value, e.target.elements.password.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);


  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" id="email" name="email" value={email} onChange={handleChangeEmail} />
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" id="password" name="password" value={password} onChange={handleChangePassword} />
          <input type="submit" value="Ok" disabled={!enableSubmit} />
        </form>
      </div>
    </React.Fragment>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
};

export default Login;