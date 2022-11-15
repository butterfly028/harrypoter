import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import { IMinifig } from "../../types/Minifig";
import * as styled from "./style";

interface IResponse {
  results: IMinifig[];
}

const Shipment = () => {
  const api_url =
    "https://rebrickable.com/api/v3/lego/minifigs/?page_size=3&min_parts=3&max_parts=7";

  const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState<IMinifig[]>([]);
  const [error, setError] = useState<unknown>("");
  const [selectedItem, setSelectdItem] = useState<string>("");

  useEffect(() => {
    const fetchLists = async () => {
      setLoading(true);
      try {
        const response = await axios.get<IResponse>(
          process.env.REACT_APP_PROXY_URL + api_url,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "key cc960400d1eb29e5465632139e2503e2",
            },
          }
        );

        setLoading(false);
        setList(response.data.results);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchLists();
  }, []);
  return (
    <>
      {loading && "Loading..."}
      {list.length ? (
        <Box>
          <Typography
            sx={{ textTransform: "uppercase", color: "white" }}
            variant="h6"
          >
            choose your minifig
          </Typography>
          <styled.Wrapper sx={{ marginTop: "0.5rem", display: "flex" }}>
            {list.map((item) => (
              <Box
                className={selectedItem === item.set_num ? "selected" : ""}
                key={item.set_num}
                onClick={() => setSelectdItem(item.set_num)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0.8rem",
                  cursor: "pointer",
                  mx: "0.5rem",
                  overflow: "hidden",
                  textAlign: "-webkit-center",
                  width: "12rem",
                  "&:hover": {
                    boxShadow: "0 0 10px 5px orange",
                  },
                }}
              >
                <Box sx={{ padding: "1rem" }}>
                  <styled.Image alt={item.name} src={item.set_img_url} />
                </Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "1rem",
                    overflow: "hidden",
                    textAlign: "center",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "80%",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "0.2rem",
                    color: "orange",
                    textDecoration: "underline",
                    fontSize: "1rem",
                  }}
                >
                  Show details
                </Typography>
              </Box>
            ))}
          </styled.Wrapper>
          <Button
            disabled={selectedItem ? false : true}
            sx={{
              backgroundColor: "#018dec",
              borderRadius: "1rem",
              width: "15rem",
              color: "white",
              marginTop: "4rem",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            proceed to shipment
          </Button>
        </Box>
      ) : (
        ""
      )}
      {error && "API fetch Error"}
    </>
  );
};

export default Shipment;
