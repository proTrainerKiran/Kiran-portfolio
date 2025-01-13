import React from "react";

const TestimonialCard = ({heading , content , user}) => {
    return (
        <div
            style={{
                backgroundColor: "#1b0a03",
                color: "white",
                fontFamily: "Neohead, sans-serif",
                padding: "30px",
                borderRadius: "10px",
                maxWidth: "400px",
                margin: "20px auto",
                textAlign: "center",
                position: "relative",
               
            }}
        >
            {/* Top Right Line */}
            <div
                style={{
                    position: "absolute",
                    top: "5px",
                    right: "10px",
                    width: "100px",
                    height: "2px",
                    backgroundColor: "white",
                }}
            ></div>

            {/* Bottom Left Line */}
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    width: "100px",
                    height: "2px",
                    backgroundColor: "white",
                }}
            ></div>

            {/* Additional Left Bottom Line extending upwards */}
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    width: "2px",
                    height: "50px",
                    backgroundColor: "white",
                }}
            ></div>

            {/* Additional Right Line extending downwards */}
            <div
                style={{
                    position: "absolute",
                    top: "5px",
                    right: "10px",
                    width: "2px",
                    height: "50px",
                    backgroundColor: "white",
                }}
            ></div>

            {/* Quote Icon */}
            <div
                style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "#9e9e9e",
                    position: "absolute",
                    top: "-10px",
                    left: "20px",
                }}
            >
                &#8220;
            </div>

            {/* Header
            <h3
                style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                }}
            >
                Hear it from my happy clients
            </h3> */}

            {/* Title */}
            <h4
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    marginBottom: "20px",
                }}
            >
                {heading}
            </h4>

            {/* Description */}
            <p
                style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                }}
            >
               {content}
            </p>

            {/* Client Name */}
            <p
                style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#9e9e9e",
                    marginTop: "20px",
                }}
            >
                {user}
            </p>
        </div>
    );
};

export default TestimonialCard;