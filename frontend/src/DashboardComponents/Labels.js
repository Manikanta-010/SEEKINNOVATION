import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Labels = () => {

    const { labels, updateLabel } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <div
                style={{
                    width: "100%",
                    backgroundImage: "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)",
                    boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
                    cursor: "pointer",
                    margin: "20px 0 25px",
                    transition: "all 0.3s ease-in-out"
                }}
            >
                <p
                    style={{
                        width: "100%",
                        backgroundColor: "rgb(45, 50, 90)",
                        color: "#FFFFFF",
                        padding: "16px",
                        fontSize: "22px",
                        fontWeight: "bold",
                        textAlign: "center",
                        margin: "0",
                        transition: "300ms"
                    }}
                    onMouseEnter={(e) => (e.target.style.background = "none")}
                    onMouseLeave={(e) => (e.target.style.background = "rgb(5, 6, 45)")}
                >
                    My Events
                </p>
            </div>

            {labels.map(({ label: lbl, checked }, idx) => {
                const inputId = `label-${idx}`;
                return (
                    <label
                        key={idx}
                        htmlFor={inputId}
                        style={{
                            height: "auto",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            cursor: "pointer",
                            margin: "0, 3px",
                            backgroundColor: checked ? "#BBDEFB" : "#E3F2FD",
                            padding: "8px 16px",
                            transition: "background 1s ease-in-out, transform 2s ease-in-out",
                            boxShadow: checked ? "0px 2px 5px rgba(0, 0, 0, 0.15)" : "none",
                            transform: checked ? "scale(1.03)" : "scale(1)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundImage = "linear-gradient(144deg, #D2BFFF, #A19EFF 50%, #C3F8FF)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundImage = "";
                            e.currentTarget.style.backgroundColor = checked ? "#BBDEFB" : "#E3F2FD";
                        }}
                    >
                        <input
                            id={inputId}
                            onChange={() => updateLabel({ label: lbl, checked: !checked })}
                            type="checkbox"
                            checked={checked}
                            style={{
                                height: "18px",
                                width: "18px",
                                cursor: "pointer",
                                accentColor: lbl,
                            }}
                        />
                        <span
                            style={{
                                textTransform: "capitalize",
                                fontSize: "18px",
                                color: lbl,
                                fontWeight: checked ? "bold" : "normal",
                            }}
                        >
                            {lbl}
                        </span>
                    </label>
                );
            })}
        </React.Fragment>
    )
}

export default Labels