const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-red-500 text-black">
            {children}
        </div>
    );
}

export default RootLayout; 