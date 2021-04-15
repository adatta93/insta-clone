export default function UserImage({ username, className }) {
  return (
    <img
      src={`/images/avatars/${username}.png`}
      alt="User Profile"
      title={username}
      className={className}
      onError={(e) => {
        e.target.src = "/images/avatars/default.png";
      }}
    />
  );
}
