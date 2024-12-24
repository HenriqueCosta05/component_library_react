import { CardComponent, ImageComponent} from "./components/ui";
import { CaptionText, HeadingText } from "./components/ui/typography";

export default function App() {
    return (
        <>
            <CardComponent orientation="horizontal">
                <ImageComponent
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PSBxulEusmjWw8REYjZD4Zzi31RzKYUNSw&s"
                                alt="Card Image"
                                width={"120px"}
                                height="120px"
                                borderRadius="8px"
                                filter="drop=shadow(0 0 4px rgba(0,0,0,0.1))"
                />
                <div>
                    <HeadingText $variant="h2">Card Title</HeadingText>
                    <CaptionText $variant="caption2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptas ea. Doloremque dolorem ullam molestias cupiditate ducimus itaque eaque fuga ipsam, ipsa tempore, velit delectus consequuntur, accusamus provident quos fugit!</CaptionText>
                </div>
            </CardComponent>
            <CardComponent orientation="vertical">
                <ImageComponent
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PSBxulEusmjWw8REYjZD4Zzi31RzKYUNSw&s"
                                alt="Card Image"
                                width="100%"
                                height="200px"
                                borderRadius="8px"
                                filter="drop=shadow(0 0 4px rgba(0,0,0,0.1))"
                />
                <div>
                    <HeadingText $variant="h2">Card Title</HeadingText>
                    <CaptionText $variant="caption1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptas ea. Doloremque dolorem ullam molestias cupiditate ducimus itaque eaque fuga ipsam, ipsa tempore, velit delectus consequuntur, accusamus provident quos fugit!</CaptionText>
                </div>
            </CardComponent>
        </>
    )
}