export default function InstagramButton({
  instagramAccount,
  isLaptop,
}: {
  instagramAccount: string;
  isLaptop: boolean;
}) {
  return (
    <a
      referrerPolicy="no-referrer"
      target="_blank"
      href={
        !isLaptop
          ? `instagram://user?username=${instagramAccount}`
          : `https://www.instagram.com/_u/${instagramAccount}`
      }
    >
      @{instagramAccount}
    </a>
  );
}
