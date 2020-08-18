const styles = (theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  text: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  orange: {
    marginTop: 10,
    backgroundColor: theme.color.primary,
    position: "relative",
    left: 128,
  },
  btn1: {
    marginTop: 30,
    width: "90%",
    backgroundColor: theme.color.primary,
    color: "white",
  },
  btn2: {
    margin: "20px 0px 10px 0px",
    width: "90%",
    backgroundColor: theme.color.primary,
    color: "white",
  },
  frmControl: {
    width: "90%",
  },
});

export default styles;
