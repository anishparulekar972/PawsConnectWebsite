import { Button, Container, Input, Textarea } from '@mantine/core';

export default function TestComponenent() {
    const demoProps = {
        h: 50,
        mt: 'md',
    };
    return (
        <>
            <Container px={0} size="30rem" {...demoProps}>
                <center>
                <Input radius="lg" placeholder="Input component" />
                <Textarea resize="vertical" label="Message" placeholder="Your comment" />
                <br />
                <Button variant="outline" color="teal" radius="xl">Button</Button>
                </center>
            </Container>
        </>
    );
}
