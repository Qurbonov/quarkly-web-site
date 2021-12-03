import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Structure, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Merry Franklin — writer, editor & consultant.
			</title>
			<meta name={"description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:title"} content={"Merry Franklin — writer, editor & consultant."} />
			<meta property={"og:description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/og-image-portfolio.png?v=2021-10-07T09:34:08.202Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/32x32.png?v=2021-10-07T09:34:24.098Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/270x270.png?v=2021-10-07T09:34:41.365Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Structure cells-number-total="2" padding="40px 0px 40px 0px" quarkly-title="Header">
			<Override slot="Content" max-width="90%">
				<Override slot="cell-0">
					<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
						Melly Franklin
					</Text>
				</Override>
				<Override slot="cell-1">
					<Components.QuarklycommunityKitMobileSidePanel>
						<Override slot="Content" justify-content="flex-end" background="--color-dark" padding="0px 0px 0px 0px" />
						<Override slot="Button Text" md-color="--light" md-font="500 20px/1.3 --fontFamily-serifTimes" md-text-transform="uppercase" />
						<Override slot="Button Icon" md-color="--light" />
						<Box
							display="flex"
							justify-content="flex-end"
							align-items="center"
							md-flex-direction="column"
							md-padding="20px 0px 20px 0px"
						>
							<Link href="#" text-decoration-line="initial" color="--lightD1" font="--base">
								Facebook
							</Link>
							<Link
								href="#"
								text-decoration-line="initial"
								color="--lightD1"
								font="--base"
								margin="0px 0px 0px 20px"
								md-margin="20px 0px 0px 0px"
							>
								LinkedIn
							</Link>
							<Link
								href="#"
								text-decoration-line="initial"
								color="--lightD1"
								font="--base"
								margin="0px 0px 0px 20px"
								md-margin="20px 0px 0px 0px"
							>
								Twitter
							</Link>
						</Box>
					</Components.QuarklycommunityKitMobileSidePanel>
				</Override>
				<Override slot="Cell 0th" align-self="center" />
			</Override>
		</Structure>
		<Structure cells-number-total="1" padding="50px 0px 100px 0px" quarkly-title="HeroBlock">
			<Override slot="Content" grid-template-columns="1fr">
				<Override slot="cell-0">
					<Image
						width="100%"
						src="https://images.unsplash.com/photo-1519242220831-09410926fbff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
						align-self="auto"
						order="0"
						flex="0 1 auto"
						display="block"
						object-fit="cover"
						height="600px"
						margin="0px 0px 80px 0px"
						object-position="50% 75%"
					/>
					<Text
						margin="0px 0px 0px 0"
						color="--lightD1"
						font="--headline1"
						md-text-align="center"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						md-margin="0px 0px 0px 0px"
					>
						Sorry, but the page you requested cannot be found. Error #404.{"\n\n"}
					</Text>
				</Override>
			</Override>
		</Structure>
		<Structure cells-number-total="10" cells-number-group="2" padding="50px 0px 150px 0px">
			<Override slot="Content" grid-template-columns="3fr 6fr">
				<Override slot="cell-0">
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						01
					</Text>
				</Override>
				<Override slot="cell-1">
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Fashion
					</Text>
				</Override>
				<Override slot="cell-2">
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						02
					</Text>
				</Override>
				<Override slot="cell-3">
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Beauty
					</Text>
				</Override>
				<Override slot="cell-4">
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						03
					</Text>
				</Override>
				<Override slot="cell-5">
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Culture
					</Text>
				</Override>
				<Override slot="cell-6">
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						04
					</Text>
				</Override>
				<Override slot="cell-7">
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						View on Magazine
					</Text>
				</Override>
				<Override slot="cell-8">
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						05
					</Text>
				</Override>
				<Override slot="cell-9">
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Consultant
					</Text>
				</Override>
				<Override slot="Cell" padding="20px 0px 20px 0px" />
				<Override slot="Cell 0th" sm-align-self="center" />
			</Override>
		</Structure>
		<Structure padding="64px 0px 64px 0px">
			<Override slot="Content" margin="0px 159px 0px 40%" lg-margin="0px auto 0px auto" sm-grid-template-columns="1fr">
				<Override slot="cell-0">
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1535361109-b8fa03822e9d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Town & Country
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						Couture Trends to Try Now
					</Text>
				</Override>
				<Override slot="cell-1">
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1549298222-1c31e8915347?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						W Magazine
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						A Visual Diary of Couture Week
					</Text>
				</Override>
				<Override slot="cell-2">
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Refinery
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						How Archive Fashion Came to Dominate TikTok
					</Text>
				</Override>
			</Override>
		</Structure>
		<Structure padding="150px 0px 150px 0px" cells-number-total="1" md-padding="60px 0px 60px 0px">
			<Override slot="Content">
				<Override slot="cell-0">
					<Link
						href="#"
						text-decoration-line="initial"
						color="--light"
						border-color="--color-light"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 34px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						border-width="0 0 1px 0"
						border-style="solid"
						margin="0px 0px 0px 37%"
						sm-margin="0px 0px 0px 0px"
						md-margin="0px 0px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-text-align="center"
					>
						Let's work tgther!
					</Link>
				</Override>
				<Override slot="Cell 0th" sm-align-items="center" sm-justify-content="center" />
			</Override>
		</Structure>
		<Structure quarkly-title="Footer+" padding="90px 0px 90px 0px">
			<Override slot="Content" md-grid-template-columns="1fr">
				<Override slot="cell-0">
					<Text margin="0px 0px 0px 0px" font="--base" color="--light" sm-text-align="center">
						Melly Franklin
					</Text>
				</Override>
				<Override slot="cell-1">
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						sm-text-align="center"
						md-text-align="center"
					>
						+1 (705) 177-58-55
						<br />
						melly@fbfranklin.com
					</Text>
				</Override>
				<Override slot="cell-2">
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						sm-text-align="center"
						md-text-align="center"
					>
						123 Demo Street New York,{" "}
						<br />
						NY 12345
					</Text>
				</Override>
				<Override slot="Cell 0th" md-text-align="center" />
			</Override>
		</Structure>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});