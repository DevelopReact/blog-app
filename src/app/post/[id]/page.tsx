//next
import { Metadata } from 'next';
//entities
import { IPost, PostItemDetail, postServices } from '@/entities/post';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post: IPost = await postServices.getPost(+id);
  const { title } = post;

  return {
    title: title,
    description: `Post details for ${title}`,
    openGraph: {}
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await postServices.getPost(+id);
  const { title, content, image } = post;

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <PostItemDetail id={+id} title={title} content={content} image={image} />
    </div>
  );
}
