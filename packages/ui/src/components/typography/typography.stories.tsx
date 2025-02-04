import type { Meta, StoryObj } from '@storybook/react';

type TypographyArgs = {
  content: string;
};

const meta: Meta = {
  title: 'Typography',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="typography">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<TypographyArgs>;

export const Default: Story = {
  render: () => (
    <>
      <h1>The Joke Tax Chronicles</h1>
      <p>
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging
        on his throne. One day, his advisors came to him with a problem: the kingdom was running out
        of money.
      </p>
      <h2 className="mt-10">The King's Plan</h2>
      <p>
        The king thought long and hard, and finally came up with <a href="#">a brilliant plan</a>:
        he would tax the jokes in the kingdom.
      </p>
      <blockquote>
        "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay
        for the privilege."
      </blockquote>
      <h3 className="mt-8">The Joke Tax</h3>
      <p>
        The king's subjects were not amused. They grumbled and complained, but the king was firm:
      </p>
      <ul>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <p>
        As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was
        one person who refused to let the king's foolishness get him down: a court jester named
        Jokester.
      </p>
      <h3>Jokester's Revolt</h3>
      <p>
        Jokester began sneaking into the castle in the middle of the night and leaving jokes all
        over the place: under the king's pillow, in his soup, even in the royal toilet. The king was
        furious, but he couldn't seem to stop Jokester.
      </p>
      <p>
        And then, one day, the people of the kingdom discovered that the jokes left by Jokester were
        so funny that they couldn't help but laugh. And once they started laughing, they couldn't
        stop.
      </p>
      <h3 className="mt-8">The People's Rebellion</h3>
      <p>
        The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns
        again, and soon the entire kingdom was in on the joke.
      </p>
      <div className="my-6 w-full overflow-y-auto">
        <table>
          <thead>
            <tr>
              <th>King's Treasury</th>
              <th>People's happiness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Empty</td>
              <td>Overflowing</td>
            </tr>
            <tr>
              <td>Modest</td>
              <td>Satisfied</td>
            </tr>
            <tr>
              <td>Full</td>
              <td>Ecstatic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The king, seeing how much happier his subjects were, realized the error of his ways and
        repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever
        after.
      </p>
      <p>
        The moral of the story is: never underestimate the power of a good laugh and always be
        careful of bad ideas.
      </p>
    </>
  ),
};

export const H1: Story = {
  args: {
    content: 'Taxing Laughter: The Joke Tax Chronicles',
  },
  render: (args) => <h1>{args.content}</h1>,
};

export const H2: Story = {
  args: {
    content: `The People of the Kingdom`,
  },
  render: (args) => <h2>{args.content}</h2>,
};

export const H3: Story = {
  args: {
    content: `The Joke Tax`,
  },
  render: (args) => <h3>{args.content}</h3>,
};

export const H4: Story = {
  args: {
    content: `People stopped telling jokes`,
  },
  render: (args) => <h4>{args.content}</h4>,
};

export const P: Story = {
  args: {
    content: `The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.`,
  },
  render: (args) => <p>{args.content}</p>,
};

export const Blockquote: Story = {
  args: {
    content: `After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege.`,
  },
  render: (args) => <blockquote>{args.content}</blockquote>,
};

export const List: StoryObj<{ list: string[] }> = {
  args: {
    list: [
      '1st level of puns: 5 gold coins',
      '2nd level of jokes: 10 gold coins',
      '3rd level of one-liners : 20 gold coins',
    ],
  },
  render: (args) => (
    <ul>
      {args.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ),
};

export const InlineCode: Story = {
  args: {
    content: `@radix-ui/react-alert-dialog`,
  },
  render: (args) => <code>{args.content}</code>,
};

export const Lead: Story = {
  args: {
    content: `A modal dialog that interrupts the user with important content and expects a response.`,
  },
  render: (args) => <p className="lead">{args.content}</p>,
};

export const Large: Story = {
  args: {
    content: `Are you sure absolutely sure?`,
  },
  render: (args) => <div className="large">{args.content}</div>,
};

export const Small: Story = {
  args: {
    content: `Email address`,
  },
  render: (args) => <p className="small">{args.content}</p>,
};

export const Table: Story = {
  render: () => (
    <table>
      <thead>
        <tr>
          <th>King's Treasury</th>
          <th>People's happiness</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Empty</td>
          <td>Overflowing</td>
        </tr>
        <tr>
          <td>Modest</td>
          <td>Satisfied</td>
        </tr>
        <tr>
          <td>Full</td>
          <td>Ecstatic</td>
        </tr>
      </tbody>
    </table>
  ),
};
