using Neutron.Scripts;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace ChatClient;

internal class Program
{
    public static bool Hosting { get; set; }
    public static IPEndPoint? EndPoint { get; set; }
    public static Socket? Socket { get; set; }

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

        application.Bind<string, bool>("hostServer", HostServer);
        application.Run();
    }

    public static void ServerLoop()
    {
        if (Socket != null && EndPoint != null)
        {
            byte[] buffer = new byte[1024];
            Socket.Bind(EndPoint);
            Socket.Listen(100);
            Socket handle = Socket.Accept();

            while (Hosting)
            {
                while (Hosting)
                {

                }
            }
        }

        Console.WriteLine("Server closed");
    }

    public static bool HostServer(string? hostname)
    {
        if (hostname == null)
        {
            return false;
        }

        try
        {
            IPHostEntry entry = Dns.GetHostEntry(hostname);
            EndPoint = new(entry.AddressList[0], 11000);
            Socket = new Socket(EndPoint.AddressFamily, SocketType.Stream, ProtocolType.Tcp);
            Hosting = true;
            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }
}