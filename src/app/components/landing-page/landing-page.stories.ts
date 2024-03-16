import { Meta, StoryObj } from "@storybook/angular";
import { LandingPageComponent } from "./landing-page.component";

const meta: Meta<LandingPageComponent> = {
    title: 'Components/Landing Page',
    component: LandingPageComponent,
    tags: ['autodocs'],
    argTypes:{}
};

export default meta;

type Story = StoryObj<LandingPageComponent>;

export const Home: Story = {
    args: {}
}
