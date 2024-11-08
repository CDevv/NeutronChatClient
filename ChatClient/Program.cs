using Neutron.Scripts;

namespace ChatClient;

internal class Program
{
    [STAThread]
    static void Main(string[] args)
    {
        Application application;

#if DEBUG
        application = new Application(title: "ChatClient", width: 960, height: 540, webContentPath: Path.Combine(AppContext.BaseDirectory, "dist"), debug: true);
#else
        application = new Application(title: "ChatClient", width: 960, height: 540, webContentPath: Path.Combine(AppContext.BaseDirectory, "dist"));
#endif
        application.Center();

        application.Run();
    }
}