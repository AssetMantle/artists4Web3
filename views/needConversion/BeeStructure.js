import React from "react";

export default function BeeStructure() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        mt: { xs: 7, md: 0 },
      }}
    >
      {tokenInfoData.right.tokenFrom2 &&
        Array.isArray(tokenInfoData.right.tokenFrom2) &&
        tokenInfoData.right.tokenFrom2.length > 0 &&
        React.Children.toArray(
          tokenInfoData.right.tokenFrom2.map((token) => (
            <Paper
              variant={tokenInfoData.right.paperVariant}
              sx={{
                gridColumn: `${token.col} / span 3`,
                gridRow: `${token.row} / span 2`,
                clipPath:
                  "polygon(30% 1%, 70% 1%, 95% 50%, 70% 99%, 30% 99%, 5% 50%)",
              }}
            >
              <Link
                href={token.url}
                variant={tokenInfoData.right.textVariant}
                textAlign="center"
                underline="none"
                fontWeight={400}
                target={token.target && token.target}
                fontSize={{ xs: "60%", md: "90%" }}
              >
                <Card
                  sx={{
                    aspectRatio: "5/4",
                    background: "transparent",
                    boxShadow: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={token.name}
                    image={token.logo && token.logo}
                    sx={{
                      margin: "0 auto",
                      border: "none",
                      width: "30%",
                      height: "auto",
                      objectPosition: "center",
                    }}
                  />
                  <CardActions>
                    <Typography
                      variant={tokenInfoData.right.textVariant}
                      textAlign="center"
                      color={tokenInfoData.right.textColor}
                      fontSize={{ xs: "60%", md: "90%" }}
                    >
                      {token.title && token.title}
                      {
                        <>
                          <br />
                          {token.subTitle && token.subTitle}
                        </>
                      }
                    </Typography>
                  </CardActions>
                </Card>
              </Link>
            </Paper>
          ))
        )}
    </Box>
  );
}
